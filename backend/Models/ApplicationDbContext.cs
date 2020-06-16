using Microsoft.EntityFrameworkCore;

namespace Cafeteria.Models
{
    /// <summary>
    /// Database Connection
    /// </summary>
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Producto> Productos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<Codigo> Codigos { get; set; }
    }
}