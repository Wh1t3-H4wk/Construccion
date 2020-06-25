using Cafeteria.DB;
using Cafeteria.Models;
using Cafeteria.Security;

namespace Cafeteria.Extra
{
    public static class FillDb
    {
        public static void GenerateProducotos(ApplicationDbContext context)
        {
            var x = new Producto();
            x.Nombre = "BTS";
            x.Descripcion = "We Are Bulletproof";
            x.Precio = 777;
            x.Categoria = "Comestible";
            x.ImgUrl = "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_of_BTS.png";
            x.Destacado = true;
            x.Disponible = true;

            var x2 = new Producto();
            x2.Nombre = "ARMY";
            x2.Descripcion = "BTS ARMY";
            x2.Precio = 777;
            x2.Categoria = "Bebestible";
            x2.ImgUrl = "https://upload.wikimedia.org/wikipedia/commons/9/93/ARMY_logo.png";
            x2.Destacado = true;
            x2.Disponible = true;

            var x3 = new Producto();
            x3.Nombre = "Medialuna";
            x3.Descripcion = "No sé cómo son";
            x3.Categoria = "Comestible";
            x3.ImgUrl = "assets/img/products-02.jpg";

            var x4 = new Producto();
            x4.Nombre = "Bebida dañina para la salud";
            x4.Descripcion = "La weá mala";
            x4.Categoria = "Bebestible";
            x4.ImgUrl = "https://s3.amazonaws.com/mercadonegro/wp-content/uploads/2020/05/27091222/coca-cola-colgate-maggi-mas-elegida-por-consumidores-kantar.jpg";
            x4.Destacado = true;
            x4.Disponible = true;

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

            var xpedido2 = new Pedido();
            xpedido2.Direccion = "direcccion2";
            xpedido2.Estado = "estado";
            xpedido2.Valor = 1231;

            context.Codigos.Add(xcodigo);
            context.Pedidos.Add(xpedido);
            context.Pedidos.Add(xpedido2);
            context.SaveChanges();
        }

        public static void GenerateDummyAccounts(ApplicationDbContext context)
        {
            var dummyAccount = new Cliente();
            dummyAccount.Apellidos = "Martínez";
            dummyAccount.Nombres = "Nacho";
            dummyAccount.Contraseña = "pass1234";
            dummyAccount.Contraseña = dummyAccount.Contraseña.HashPassword();
            dummyAccount.Direcion = "Curico\n Calle Falsa 123";
            dummyAccount.Mail = "nacho123@gmail.com";
            dummyAccount.Telefono = "+56912345678";
            dummyAccount.Rol = "Cliente";

            context.Clientes.Add(dummyAccount);
            context.SaveChanges();
        }
    }
}