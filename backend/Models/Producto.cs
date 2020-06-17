using System.Collections.Generic;
namespace Cafeteria.Models
{
    public class Producto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string ImgUrl { get; set; }
        public string Descripcion { get; set; }
        public uint Precio { get; set; }
        public string Categoria { get; set; }
        public bool Disponible { get; set; }
        public bool Destacado { get; set; }
        public bool Eliminado { get; set; }
        public List<ProductoPedido> Pedidos { get; set; }
    }
}