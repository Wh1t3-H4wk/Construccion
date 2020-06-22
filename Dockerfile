#for build
#docker build -t cafeteria_api .
#for run
#docker run -p port:80 cafeteria_api
#where port is any port that you select

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env
WORKDIR /app

COPY backend/*.csproj .
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
#EXPOSE 80
COPY --from=build-env /app/out .
#use this for test it on your local docker
#ENTRYPOINT ["dotnet", "Cafeteria.dll"]
# heroku uses this
CMD ASPNETCORE_URLS=http://*:$PORT dotnet Cafeteria.dll

