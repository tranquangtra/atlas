export default function Works() {
  return (
    <section
      id="works"
      className="relative py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto">
      {/* Background Image */}
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <img
      src="/anhnenwork.jpg"
      alt=""
      className="w-full h-full object-cover opacity-20 select-none"
    />
  </div>

        {/* Heading */}
        <p className="text-sm tracking-[0.3em] uppercase text-zinc-500">
          Experience & Research
        </p>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-8">

          {/* LEFT : Work Experience */}
          <div>

            <h3 className="text-3xl font-light mb-10">
              Work Experience
            </h3>

            <div className="space-y-10">

              <div>
                <p className="text-sm uppercase tracking-widest text-zinc-500">
                  2024 – Present
                </p>

                <h4 className="text-2xl mt-2">
                  Lecturer
                </h4>

                <p className="text-zinc-600 mt-2">
                  Faculty of Environment
                  <br />
                  VNUHCM, University of Science
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-zinc-500">
                  2018
                </p>

                <h4 className="text-2xl mt-2">
                  Researcher
                </h4>

                <p className="text-zinc-600 mt-2">
                  Faculty of Environment
                  <br />
                  VNUHCM, University of Science
                </p>
              </div>


            </div>

          </div>

          {/* RIGHT : Selected Research */}
          <div>

            <h3 className="text-3xl font-light mb-10">
              Selected Research
            </h3>

            <div className="space-y-8">

              <div className="border-l-2 border-zinc-300 pl-5">

                <h4 className="text-xl">
                  Air quality
                </h4>

                <p className="text-zinc-600 mt-2">
                  Tram Dang Minh Son, Tran Quang Tra, To Thi Hien. Estimation
                   of PM2.5 concentrations from Himawari-9 satellite data: 
                  a case study of Ho Chi Minh City. 2026
                </p>
                <p className="text-zinc-600 mt-2">
                Nguyen Gia Vy, Tran Quang Tra, To Thi Hien. Assessment of NO2 and O3 concentrations
                and distribution over Ho Chi Minh City using Sentinel-5P TROPOMI data, 2025.
                </p>
                <p className="text-zinc-600 mt-2">
    	          Tran Quang Tra, Dao Nguyen Khoi. Assessing the distribution of PM2.5 concentration in HCMC 
                by remote sensing - some initial results. Vietnam Journal of Hydro - Meteorology, 2021
                </p>

              </div>

              <div className="border-l-2 border-zinc-300 pl-5">

                <h4 className="text-xl">
                  Water quality
                </h4>

                <p className="text-zinc-600 mt-2">
                Tran Quang Tra, Nguyen Hien Than. Estimation of nutrient concentrations 
                  in the Tri An reservoir, Dong Nai province using LANDSAT 8 OLI. 
                  National Applied GIS Conference - 2022, Vietnam. IOP Publishing, 2023.
                </p> 
                <p className="text-zinc-600 mt-2">
                Nguyen Thi Diem Thuy, Nguyen Thi Huynh Mai, Tran Quang Tra. The Use of Machine Learning 
                  Algorithms for Water Quality Index Predictionin the Sai Gon River, Vietnam. App. Envi. 
                  Res. 47(2) (2025): 018.
                </p>

              </div>

              <div className="border-l-2 border-zinc-300 pl-5">

                <h4 className="text-xl">
                  Land/Soil environment
                </h4>

                <p className="text-zinc-600 mt-2">
                  Thi Que Nam Nguyen, Quang Tra Tran, 
                  Thi Phuong Chi Hoang, Thi Sapi Chau, Ngoc Phuong Khanh Le. 
                  Geoeducational potential in Hang Rai geoheritage, Nui Chua 
                  National Park, Ninh Thuan province, Vietnam. 2025. 

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}