/* namespace Entities.DTOs
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
export interface CustomerDto{
    customerId:number;
    firstName:string;
    lastName:string;
    email:string;
    companyName:string;
}