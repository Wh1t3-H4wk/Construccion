using Cafeteria.DB;
using Cafeteria.Extra;
using Cafeteria.Security;
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
            services.AddCors();
            services.AddJwtBearerAuthentication(Configuration["Jwt:Key"]); //JwtConfiguration
            services.AddSwaggerDocumentation(); //Swagger
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
                FillDb.GeneratePedidosAndCodigos(context);
                //--
            }
            app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());
            
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
            app.UseSwaggerDocumentation(); //swagger
            //Makes Sure the DB is create, if not it creates it
            context.Database.EnsureCreated();

        }
    }
}
