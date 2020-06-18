using Cafeteria.Models;

namespace Cafeteria.Repository
{
    public static class FillDb
    {
        public static void GenerateProducotos(ApplicationDbContext context)
        {
            var x = new Producto();
            x.Nombre = "BTS";
            x.Descripcion = "BTS lo más grande";
            x.Categoria = "Lo mejor de lo mejor";
            x.ImgUrl = "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_of_BTS.png";
            x.Destacado = true;

            var x2 = new Producto();
            x2.Nombre = "ARMY";
            x2.Descripcion = "BTS ARMY";
            x2.Categoria = "ARMY";
            x2.ImgUrl = "https://upload.wikimedia.org/wikipedia/commons/9/93/ARMY_logo.png";
            x2.Destacado = true;

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

            context.Add(x);
            context.Add(x2);
            context.Add(x3);
            context.Add(x4);
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
            xpedido.Codigo = xcodigo;
            
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