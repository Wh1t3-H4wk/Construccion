using Cafeteria.Models;
using Microsoft.EntityFrameworkCore;

namespace Cafeteria.DB
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Producto> Productos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<Codigo> Codigos { get; set; }
        public DbSet<BaseUser> BaseUsers { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<ProductoPedido> ProductoPedidos { get; set; }
    }
}