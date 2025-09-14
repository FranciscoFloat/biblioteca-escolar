import { ComienzaComponent } from "./Inicio/ComienzaComponent";
import ElegirnosComponent from "./Inicio/ElegirnosComponent";
import SliderComponent from "./sliderComponent/SliderComponents";

export default function IndexComponent() {
  return (
    <div className="pt-20">
      <SliderComponent />
      <ElegirnosComponent />
      <ComienzaComponent />
    </div>
  );
}
