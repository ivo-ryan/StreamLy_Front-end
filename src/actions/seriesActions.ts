
import { seriesService } from "@/services/seriesServices";

export const series =  () => {
    const res =  seriesService.getNewstSeries();
    return res
    
}