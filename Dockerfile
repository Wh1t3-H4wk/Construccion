#this is for deploy only

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env
WORKDIR /app

COPY backend/*.csproj .
RUN dotnet restore

COPY backend/. ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
#EXPOSE 80
COPY --from=build-env /app/out .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet Cafeteria.dll

