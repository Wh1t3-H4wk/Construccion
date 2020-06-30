using System.Collections.Generic;

namespace Cafeteria.Models
{
    public class ProductoViewModel
    {
        public int ProductoId { get; set; }
        public uint Cantidad { get; set; }
    }
    public class PedidoViewModel
    {
        public string ClienteMail { get; set; }
        public List<ProductoViewModel> Productos { get; set; }
        public string Direccion { get; set; }
        public string Preparacion { get; set; }
        public uint Valor { get; set; }
    }
}