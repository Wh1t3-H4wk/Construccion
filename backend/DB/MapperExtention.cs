using AutoMapper;
using Cafeteria.Models;

namespace Cafeteria.DB
{
    public static class MapperExtetion
    {
        public static IMapper InitMapper() =>
            new AutoMapperConfiguration().Configure().CreateMapper();
    }
    public class ProfileMapping : Profile
    {
        public ProfileMapping()  
        {  
            CreateMap<Producto, Producto>()  
                .ForMember(d => d.Id, o => o.Ignore())
                .ForMember(d => d.Destacado, o => o.Condition(cond => cond.Destacado != default))
                .ForMember(d => d.Disponible, o => o.Condition(cond => cond.Disponible != default))
                .ForMember(d => d.Eliminado, o => o.Condition(cond => cond.Eliminado != default))
                .ForMember(d => d.Precio, o => o.Condition(cond => cond.Precio > 0))
                .ForAllOtherMembers(o => o.Condition((src, dest, value) => value != null));
        }  
        
    }
    public class AutoMapperConfiguration
    {
        public MapperConfiguration Configure()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<ProfileMapping>();
            });
            return config;
        }
    }
}