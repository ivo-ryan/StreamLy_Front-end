import { Splide , SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes";

export default function SlideComponent(){
    return (
        <>
            <div>
                <Splide options={{
                    type: "loop",
                    perPage: 4,
                    perMove: 1,
                    pagination: false
                }}>
                    <SplideSlide>

                    </SplideSlide>
                </Splide>
            </div>
        </>
    )
}