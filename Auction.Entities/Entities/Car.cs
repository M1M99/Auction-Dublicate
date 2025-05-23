﻿using Auction.Core.Abstract;

namespace FinalAspReactAuction.Server.Entities;
public class Car:IEntity
{
    public int Id { get; set; }
    //public Make Make { get; set; } //marka
    public int MakeId { get; set; } //marka
    //public Model Model { get; set; }
    public int ModelId { get; set; }
    public int Year { get; set; }
    public string Vin { get; set; }
    public string Damage { get; set; }
    public double Otometer { get; set; }
    //[JsonIgnore]
    public string Engine { get; set; }
    public string? FuelType { get; set; }
    public string Branch { get; set; }  
    public string Cylinder{ get; set; }
    public string Key { get; set; }
    public string Country { get; set; }
    public string? SaleDocument { get; set; }
    public string? Description { get; set; }
    public decimal Price { get; set; }

    public string? ImageUrl { get; set; }
    public string? VideoUrl { get; set; }
}
