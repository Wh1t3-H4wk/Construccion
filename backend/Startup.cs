using Cafeteria.Models;
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
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //Configuration of the Database, for the moment is just a local DB in memory
            services.AddDbContext<ApplicationDbContext>(opt => opt.UseInMemoryDatabase("dblocal"));
            //--
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ApplicationDbContext con)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();
            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
            
            //random objects for producto
            var x = new Producto();
            x.Nombre = "p1";
            x.Descripcion = "d1";
            x.Categoria = "Catalogo";
            
            var x2 = new  Producto();
            x2.Nombre = "p2";
            x2.Descripcion = "des";
            x2.Categoria = "Destacado";
            con.Add(x);
            con.Add(x2);
            con.SaveChanges();
            
        }
    }
}