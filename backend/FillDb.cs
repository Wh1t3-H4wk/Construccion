using Cafeteria.Models;

namespace Cafeteria.Repository
{
    public static class FillDb
    {

        public static void GenerateProducotos(ApplicationDbContext context)
        {

            var x = new Producto();
            x.Nombre = "Bebida 1";
            x.Descripcion = "Descripcion generica";
            x.Categoria = "categoria";
            x.ImgUrl = "assets/img/products-02.jpg";
            x.Destacado = true;

            var x2 = new Producto();
            x2.Nombre = "Bebida 2";
            x2.Descripcion = "Descripcion generica";
            x2.Categoria = "Catalogo";
            x2.ImgUrl = "assets/img/products-02.jpg";

            var x3 = new Producto();
            x3.Nombre = "Bebida 3";
            x3.Descripcion = "Descripcion generica";
            x3.Categoria = "Catalogo";
            x3.ImgUrl = "assets/img/products-02.jpg";

            var x4 = new Producto();
            x4.Nombre = "Bebida 4";
            x4.Descripcion = "Descripcion generica";
            x4.Categoria = "Catalogo";
            x4.ImgUrl = "assets/img/products-02.jpg";
            x4.Destacado = true;

            var x5 = new Producto();
            x5.Nombre = "Bebida 5";
            x5.Descripcion = "Descripcion generica";
            x5.Categoria = "Catalogo";
            x5.ImgUrl = "assets/img/products-02.jpg";

            var x6 = new Producto();
            x6.Nombre = "Bebida 6";
            x6.Descripcion = "Descripcion generica";
            x6.Categoria = "Catalogo";
            x6.ImgUrl = "assets/img/products-02.jpg";

            var x7 = new Producto();
            x7.Nombre = "Bebida 7";
            x7.Descripcion = "Descripcion generica";
            x7.Categoria = "Catalogo";
            x7.ImgUrl = "assets/img/products-02.jpg";

            var x8 = new Producto();
            x8.Nombre = "Bebida 8";
            x8.Descripcion = "Descripcion generica";
            x8.Categoria = "Categoria";
            x8.ImgUrl = "assets/img/products-02.jpg";

            var x9 = new Producto();
            x9.Nombre = "Bebida 9";
            x9.Descripcion = "Descripcion generica";
            x9.Categoria = "Catalogo";
            x9.ImgUrl = "assets/img/products-02.jpg";

            var x10 = new Producto();
            x10.Nombre = "Comida 1";
            x10.Descripcion = "Descripcion generica";
            x10.Categoria = "Catalogo";
            x10.ImgUrl = "assets/img/products-02.jpg";

            var x11 = new Producto();
            x11.Nombre = "Comida 2";
            x11.Descripcion = "Descripcion generica";
            x11.Categoria = "Catalogo";
            x11.ImgUrl = "assets/img/products-02.jpg";

            var x12 = new Producto();
            x12.Nombre = "Comida 3";
            x12.Descripcion = "Descripcion generica";
            x12.Categoria = "Catalogo";
            x12.ImgUrl = "assets/img/products-02.jpg";

            var x13 = new Producto();
            x13.Nombre = "Comida 4";
            x13.Descripcion = "Descripcion generica";
            x13.Categoria = "Catalogo";
            x13.ImgUrl = "assets/img/products-02.jpg";

            var x14 = new Producto();
            x14.Nombre = "Comida 5";
            x14.Descripcion = "Descripcion generica";
            x14.Categoria = "Catalogo";
            x14.ImgUrl = "assets/img/products-02.jpg";
            x14.Destacado = true;

            var x15 = new Producto();
            x15.Nombre = "Comida 6";
            x15.Descripcion = "Descripcion generica";
            x15.Categoria = "Catalogo";
            x15.ImgUrl = "assets/img/products-02.jpg";

            var x16 = new Producto();
            x16.Nombre = "Comida 7";
            x16.Descripcion = "Descripcion generica";
            x16.Categoria = "Catalogo";
            x16.ImgUrl = "assets/img/products-02.jpg";

            var x17 = new Producto();
            x17.Nombre = "Comida 8";
            x17.Descripcion = "Descripcion generica";
            x17.Categoria = "Catalogo";
            x17.ImgUrl = "assets/img/products-02.jpg";

            var x18 = new Producto();
            x18.Nombre = "Comida 9";
            x18.Descripcion = "Descripcion generica";
            x18.Categoria = "Catalogo";
            x18.ImgUrl = "assets/img/products-02.jpg";

            context.Add(x);
            context.Add(x2);
            context.Add(x3);
            context.Add(x4);
            context.Add(x5);
            context.Add(x6);
            context.Add(x7);
            context.Add(x8);
            context.Add(x9);
            context.Add(x10);
            context.Add(x11);
            context.Add(x12);
            context.Add(x13);
            context.Add(x14);
            context.Add(x15);
            context.Add(x16);
            context.Add(x17);
            context.Add(x18);
            context.SaveChanges();
        }

        public static void GeneratePedidosAndCodigos(ApplicationDbContext context)
        {
            var xcodigo = new Codigo();
            xcodigo.Descuento = 10;
            xcodigo.Name = "codigo1";
            
            var xpedido = new Pedido();
            xpedido.Direccion = "direncion";
            xpedido.Estado = "desarrollo";
            xpedido.Valor = 9999;

            var xpedido2 = new Pedido();
            xpedido2.Direccion = "direcccion2";
            xpedido2.Estado = "estado";
            xpedido2.Valor = 1231;

            context.Codigos.Add(xcodigo);
            context.Pedidos.Add(xpedido);
            context.Pedidos.Add(xpedido2);
            context.SaveChanges();


        }
    }
}