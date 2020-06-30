using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Cafeteria.Models
{
    public class BaseUser
    {
        [Key]
        public string Mail { get; set; }
        public string Contraseña { get; set; }
        public string Rol { get; set; } = "Cliente";
    }
    public class Usuario : BaseUser
    {
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
    }
    public class Cliente : Usuario
    {
        public string Telefono { get; set; }
        public string Direcion { get; set; }
    }
}