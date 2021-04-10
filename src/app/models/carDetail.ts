/* namespace Entities.DTOs
ekle:   isRented:boolean;
{
    public class CarDetailDto : IDto
    {
        public int CarId { get; set; }
        public string CarName { get; set; }
        public string BrandName { get; set; }
        public string ColorName { get; set; }
        public decimal DailyPrice { get; set; }
    }
}
 */
export interface CarDetail{
    id:number;
    carName:string;
    brandName:string;
    colorName:string;
    modelYear:number;
    dailyPrice:number;
    description:string,
    createdAt:Date;
    images:string[];
    isRented:boolean; 
}