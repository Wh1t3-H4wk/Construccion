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
    }
}