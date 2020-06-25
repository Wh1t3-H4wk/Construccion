namespace Cafeteria.Models
{
    public class Pedido
    {
        public int Id { get; set; }
        public string Preparacion { get; set; }
        public uint Valor { get; set; }
        public string Direccion { get; set; }
        public string Estado { get; set; }
    }
}