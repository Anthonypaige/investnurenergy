document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculator-form")!.addEventListener("click", function() {
      calculateSavings();
    });
  
    function calculateSavings() {
      const batteryCapacity: number = parseFloat((document.getElementById("batteryCapacity") as HTMLInputElement).value) || 0;
      const peakRate: number = parseFloat((document.getElementById("peakRate") as HTMLInputElement).value) || 0;
      const offPeakRate: number = parseFloat((document.getElementById("offPeakRate") as HTMLInputElement).value) || 0;
      const summerPeakHours: number = parseFloat((document.getElementById("summerPeakHours") as HTMLInputElement).value) || 0;
      const nonSummerPeakHours: number = parseFloat((document.getElementById("nonSummerPeakHours") as HTMLInputElement).value) || 0;
      const averageConsumption: number = parseFloat((document.getElementById("averageConsumption") as HTMLInputElement).value) || 0;
  
      const summerDays: number = 122;
      const nonSummerDays: number = 243;
  
      const savingsPerKWh: number = peakRate - offPeakRate;
  
      const summerSavings: number = savingsPerKWh * averageConsumption * summerPeakHours * summerDays;
      const nonSummerSavings: number = savingsPerKWh * averageConsumption * nonSummerPeakHours * nonSummerDays;
  
      const totalSavings: number = summerSavings + nonSummerSavings;
  
      (document.getElementById("results") as HTMLElement).innerHTML = "Total Savings Per Year: $" + totalSavings.toFixed(2);
    }
  });
  