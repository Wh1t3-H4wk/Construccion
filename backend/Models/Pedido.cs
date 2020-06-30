using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cafeteria.Models
{
    public class Pedido
    {
        public int Id { get; set; }
        public string Preparacion { get; set; }
        public uint Valor { get; set; }
        public string Direccion { get; set; }
        public string Estado { get; set; } = "Preparación";
        public Cliente Cliente { get; set; }
        [NotMapped]
        public List<Producto> Pedidos { get; set; } = new List<Producto>();
        
    }
}