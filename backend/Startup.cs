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
			
			//app.UseHsts();
            //app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();
            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
            
            //random objects for producto
            var x = new Producto();
            x.Nombre = "Bebida 1";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "Catalogo";

            var x2 = new Producto();
            x.Nombre = "Bebida 2";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "Catalogo";

            var x3 = new Producto();
            x.Nombre = "Bebida 3";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "Catalogo";

            var x4 = new Producto();
            x.Nombre = "Bebida 4";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "Catalogo";

            var x5 = new Producto();
            x.Nombre = "Bebida 5";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "Catalogo";

            var x6 = new Producto();
            x.Nombre = "Bebida 6";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "Catalogo";

            var x7 = new Producto();
            x.Nombre = "Bebida 7";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "Catalogo";

            var x8 = new Producto();
            x.Nombre = "Bebida 8";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "Catalogo";

            var x9 = new Producto();
            x.Nombre = "Bebida 9";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "Catalogo";

            var x10 = new Producto();
            x.Nombre = "Comida 1";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "Catalogo";

            var x11 = new Producto();
            x.Nombre = "Comida 2";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "Catalogo";

            var x12 = new Producto();
            x.Nombre = "Comida 3";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "Catalogo";

            var x13 = new Producto();
            x.Nombre = "Comida 4";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "Catalogo";

            var x14 = new Producto();
            x.Nombre = "Comida 5";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "Catalogo";

            var x15 = new Producto();
            x.Nombre = "Comida 6";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "Catalogo";

            var x16 = new Producto();
            x.Nombre = "Comida 7";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "Catalogo";

            var x17 = new Producto();
            x.Nombre = "Comida 8";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "Catalogo";

            var x18 = new Producto();
            x.Nombre = "Comida 9";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "Catalogo";





            con.Add(x);
            con.Add(x2);
            con.Add(x3);
            con.Add(x4);
            con.Add(x5);
            con.Add(x6);
            con.Add(x7);
            con.Add(x8);
            con.Add(x9);
            con.Add(x10);
            con.Add(x11);
            con.Add(x12);
            con.Add(x13);
            con.Add(x14);
            con.Add(x15);
            con.Add(x16);
            con.Add(x17);
            con.Add(x18);
            con.SaveChanges();
           
        }
    }
}
