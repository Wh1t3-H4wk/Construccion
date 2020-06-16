using System.ComponentModel.DataAnnotations;

namespace Cafeteria.Models
{
    public class Codigo
    {
        [Key]
        public string Name { get; set; }
        public float Descuento { get; set; }
    }
}