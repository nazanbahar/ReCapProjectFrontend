
/* namespace Entities.DTOs
{
    public class RentalDetailDto : IDto
    {
        public int RentalId { get; set; }
        public string CarName { get; set; }
        public string Description { get; set; }
        public int ModelYear { get; set; }
        public decimal DailyPrice { get; set; }
        public string CompanyName { get; set; }
        public DateTime RentDate { get; set; }
        public DateTime? ReturnDate { get; set; }

    }
}
 */
export interface RentalDetail{
    id:number;
    carId:number;
    brandId:number;
    colorId:number;
    customerId:number;
    userId:number;
    rentDate:Date;
    returnDate:Date;
    customerName:string;
    userName:string;
    companyName:string;
    carName:string;
    brandName:string;
    colorName:string;
    modelYear:number;
    dailyPrice:number;
    description:string;
    isRented:boolean;
}
