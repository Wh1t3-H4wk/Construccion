using Cafeteria.Models;
using Cafeteria.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Cafeteria
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
            => Configuration = configuration;

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //SQLite DbConfifuration
            services.AddDbContext<ApplicationDbContext>(opt => opt.UseSqlite("Data Source=dataBaseCafeteria.db"));

            // Add CORS policy
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOriginsPolicy", builder => { builder.AllowAnyOrigin(); });
            });
            //--
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ApplicationDbContext context)
        {
            if (env.IsDevelopment()) 
            {
                app.UseDeveloperExceptionPage();
                
                //Dummy DbFill just for testing in development environment
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated(); 
                FillDb.GenerateProducotos(context);
                //--
            }

            app.UseCors("AllowAllOriginsPolicy");
            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });

            //Makes Sure the DB is create, if not it creates it
            context.Database.EnsureCreated();

        }
    }
}