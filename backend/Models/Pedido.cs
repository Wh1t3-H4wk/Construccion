using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Cafeteria.Models
{
    public class Pedido
    {
        [Key]
        public int ID { get; set; }
        public string Preparacion { get; set; }
        public uint Valor { get; set; }
        public string Direccion { get; set; }
        public string Estado { get; set; }
        public List<Producto> Productos { get; set; } = new List<Producto>();
    }
}