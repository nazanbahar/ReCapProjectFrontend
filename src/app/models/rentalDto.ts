
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
export interface RentalDto{
    rentalId:number;
    carName:string;
    description:string;
    modelYear:number;
    dailyPrice:number;
    companyName:string;
    rentDate:Date;
    returnDate:Date;
}
