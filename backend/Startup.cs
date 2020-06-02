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
        private const string AllowAllOriginsPolicy = "AllowAllOriginsPolicy";
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
			// Add CORS policy
            services.AddCors(options => 
                { options.AddPolicy(AllowAllOriginsPolicy, builder => { builder.AllowAnyOrigin();});});
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
			
   			app.UseCors(AllowAllOriginsPolicy);
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
            x2.Nombre = "Bebida 2";
            x2.Descripcion = "Descripcion generica";
            x2.Categoria = "Catalogo";

            var x3 = new Producto();
            x3.Nombre = "Bebida 3";
            x3.Descripcion = "Descripcion generica";
            x3.Categoria = "Catalogo";

            var x4 = new Producto();
            x4.Nombre = "Bebida 4";
            x4.Descripcion = "Descripcion generica";
            x4.Categoria = "Catalogo";

            var x5 = new Producto();
            x5.Nombre = "Bebida 5";
            x5.Descripcion = "Descripcion generica";
            x5.Categoria = "Catalogo";

            var x6 = new Producto();
            x6.Nombre = "Bebida 6";
            x6.Descripcion = "Descripcion generica";
            x6.Categoria = "Catalogo";

            var x7 = new Producto();
            x7.Nombre = "Bebida 7";
            x7.Descripcion = "Descripcion generica";
            x7.Categoria = "Catalogo";

            var x8 = new Producto();
            x8.Nombre = "Bebida 8";
            x8.Descripcion = "Descripcion generica";
            x8.Categoria = "Catalogo";

            var x9 = new Producto();
            x9.Nombre = "Bebida 9";
            x9.Descripcion = "Descripcion generica";
            x9.Categoria = "Catalogo";

            var x10 = new Producto();
            x10.Nombre = "Comida 1";
            x10.Descripcion = "Descripcion generica";
            x10.Categoria = "Catalogo";

            var x11 = new Producto();
            x11.Nombre = "Comida 2";
            x11.Descripcion = "Descripcion generica";
            x11.Categoria = "Catalogo";

            var x12 = new Producto();
            x12.Nombre = "Comida 3";
            x12.Descripcion = "Descripcion generica";
            x12.Categoria = "Catalogo";

            var x13 = new Producto();
            x13.Nombre = "Comida 4";
            x13.Descripcion = "Descripcion generica";
            x13.Categoria = "Catalogo";

            var x14 = new Producto();
            x14.Nombre = "Comida 5";
            x14.Descripcion = "Descripcion generica";
            x14.Categoria = "Catalogo";

            var x15 = new Producto();
            x15.Nombre = "Comida 6";
            x15.Descripcion = "Descripcion generica";
            x15.Categoria = "Catalogo";

            var x16 = new Producto();
            x16.Nombre = "Comida 7";
            x16.Descripcion = "Descripcion generica";
            x16.Categoria = "Catalogo";

            var x17 = new Producto();
            x17.Nombre = "Comida 8";
            x17.Descripcion = "Descripcion generica";
            x17.Categoria = "Catalogo";

            var x18 = new Producto();
            x18.Nombre = "Comida 9";
            x18.Descripcion = "Descripcion generica";
            x18.Categoria = "Catalogo";





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
