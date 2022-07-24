<template>
  <div>
    <section
      class="
        main-section
        relative
        bg-cover bg-center bg-no-repeat
        w-full
        pb-24
        md:pb-7 md:min-h-screen
      "
    >
      <Logo
        class="
          absolute
          left-0
          top-0
          w-36
          h-36
          md:w-52 md:h-52
          2xl:w-72 2xl:h-72
        "
        data-aos="fade-right"
        data-aos-delay="400"
      />
      <div
        class="flex justify-center w-full relative pt-48 md:pt-36 lg:pt-7"
        data-aos="fade-down"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="663"
          height="430"
          viewBox="0 0 663 430"
          class="w-2/3 h-auto lg:w-3/5 xl:w-auto"
        >
          <defs>
            <pattern
              id="pattern"
              preserveAspectRatio="none"
              width="100%"
              height="100%"
              viewBox="0 0 588 381"
            >
              <image width="588" height="381" href="~assets/images/badge.png" />
            </pattern>
          </defs>
          <rect id="badge" width="663" height="430" fill="url(#pattern)" />
        </svg>
      </div>
      <div class="w-full flex flex-col bottom-20 md:absolute">
        <div
          class="mb-14 flex justify-center sm:justify-start"
          data-aos="fade"
          data-aos-delay="500"
        >
          <DottedBordersWrapper
            dotColor="bg-white"
            borderColor="border-white"
            :borderOpacity="0.6"
            class="
              absolute
              sm:left-20
              p-3
              sm:p-5
              bg-primary bg-opacity-40
              sm:bg-opacity-30
              md:bg-opacity-10
              backdrop-blur-sm
              w-5/6
              sm:w-[500px]
            "
          >
            <p class="w-full md:w-[458px] text-2xl font-medium text-white">
              Apply to our award-winning JOB Young Talent Program for
              recruitment (new graduate), internship and development
              opportunities in a global company with new working models!
            </p>
          </DottedBordersWrapper>
        </div>
        <div
          class="
            flex flex-col
            md:flex-row
            justify-between
            mx-auto
            border border-white border-opacity-30
          "
          style="width: 72%"
          data-aos="fade"
          data-aos-delay="600"
        >
          <DottedBordersWrapper
            dotColor="bg-white"
            borderColor="border-white"
            :borderOpacity="0.6"
            class="bg-black bg-opacity-50 md:bg-transparent"
          >
            <template #top-left>
              <CalendarIcon class="absolute bottom-0 right-0" />
            </template>
            <div class="text-white text-center px-4 py-1.5">
              <p class="text-xl">SON KATILIM TARİHİ</p>
              <p class="drop-shadow-glow text-3xl font-black">10.04.2022</p>
            </div>
          </DottedBordersWrapper>

          <DottedBordersWrapper
            dotColor="bg-white"
            borderColor="border-white"
            :borderOpacity="0.6"
            class="active:scale-95 transition-transform"
          >
            <ActionButton
              v-scroll-to="'#application-form'"
              class="w-full whitespace-nowrap"
            >
              HEMEN BAŞVUR
            </ActionButton>
          </DottedBordersWrapper>
        </div>
      </div>
    </section>
    <section id="about" class="bg-white">
      <div class="mx-auto py-10 md:py-24 flex flex-col items-center">
        <h2
          class="
            text-center text-3xl
            md:text-6xl
            font-extrabold
            text-secondary
            mb-7
          "
          style="line-height: 1.3"
          data-aos="fade-down"
        >
          JOB@YıldızHolding<br />
          NEDİR?
        </h2>
        <DottedBordersWrapper
          :borderOpacity="0.6"
          class="w-5/6 md:w-3/5"
          data-aos="zoom-in-down"
          data-aos-delay="150"
        >
          <p class="text-center text-secondary p-2 md:p-10 text-xl md:text-3xl">
            JOB@YıldızHolding, tam 11 yıldır gelişimine ve kariyerine yön
            vermeye, global bir şirket kültürünü deneyimlemeye ve kariyer
            fırsatlarını yakalamaya hevesli tüm genç yeteneklerin buluşma
            noktası olan staj ve işe alım programıdır!
          </p>
        </DottedBordersWrapper>
      </div>
    </section>
    <section
      id="program"
      class="
        w-full
        bg-cover bg-center bg-no-repeat
        py-12
        md:py-32
        text-black
        overflow-x-hidden
      "
    >
      <ProgramsTabCarousel />
    </section>
    <section
      id="who-can-join"
      class="w-full bg-cover bg-center bg-no-repeat pt-8 pb-20 lg:p-24 2xl:p-48"
    >
      <div class="flex flex-col w-5/6 xl:w-3/5 mx-auto text-white gap-4">
        <div class="flex gap-4" data-aos="fade-right">
          <div
            class="
              w-16
              h-16
              lg:w-40 lg:h-40
              bg-white bg-opacity-10
              backdrop-blur-sm
              grid
              place-items-center
            "
          >
            <QuestionBubbleIcon class="w-9 h-9 lg:w-24 lg:h-24" />
          </div>
          <h2
            class="text-2xl lg:text-6xl font-extrabold"
            style="line-height: 1.3"
          >
            KİMLER<br />KATILABİLİR?
          </h2>
        </div>
        <div
          class="flex flex-col justify-center xl:ml-44"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <DottedBordersWrapper
            borderColor="border-white"
            dotColor="bg-white"
            class="
              bg-white bg-opacity-10
              backdrop-blur-sm
              text-2xl
              lg:text-4xl
              p-0
            "
          >
            <p class="p-5 pb-10 lg:p-10">
              Üniversite 3. Sınıf, 4. Sınıf veya Yüksek Lisans programlarında
              öğrenim gören ve kariyerine parlak bir şirkette yön vermek isteyen
              öğrenciler ve yeni mezunlar.
            </p>
            <span
              class="
                absolute
                z-10
                h-0
                w-full
                lg:w-auto
                bottom-6
                flex
                justify-center
                lg:-right-32
              "
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <DottedBordersWrapper
                dotColor="bg-white"
                borderColor="border-white"
                :borderOpacity="0.6"
                class="active:scale-95 transition-transform"
                style="width: fit-content; height: fit-content"
              >
                <ActionButton
                  class="whitespace-nowrap"
                  v-scroll-to="'#application-form'"
                  >HEMEN BAŞVUR</ActionButton
                >
              </DottedBordersWrapper>
            </span>
          </DottedBordersWrapper>
        </div>
      </div>
    </section>
    <section
      id="what-will-i-win"
      class="
        w-full
        bg-gray-300 bg-cover bg-center bg-no-repeat
        pt-16
        md:pt-24
        xl:pt-32
        mb-52
      "
      style="overflow-x: clip"
    >
      <div class="flex w-4/5 gap-6 md:px-10 xl:px-24 2xl:px-32 mx-auto">
        <div data-aos="fade">
          <div
            class="
              w-16
              h-16
              md:w-24 md:h-24
              xl:w-40 xl:h-40
              bg-white
              grid
              place-items-center
            "
          >
            <HandIcon
              class="
                w-9
                h-9
                md:w-16 md:h-16
                xl:w-24 xl:h-24
                fill-current
                text-primary
              "
            />
          </div>
        </div>
        <div
          class="flex flex-col justify-center"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h2
            class="
              text-2xl
              md:text-4xl
              xl:text-6xl
              font-extrabold
              text-secondary
            "
            style="line-height: 1.3"
          >
            NELER <br />KAZANACAĞIM?
          </h2>
          <p
            class="
              text-primary text-base
              md:text-2xl
              xl:text-4xl
              font-medium
              pl-0
              md:pl-8
              xl:pl-20
              w-5/6
            "
          >
            Kariyerine güçlü bir başlangıç yapmak için ihtiyacın olacak tüm
            gelişim alanları!
          </p>
        </div>
      </div>
      <div
        class="w-full flex justify-end items-center mt-4 mx-auto px-5 md:px-32"
      >
        <p class="text-secondary text-sm md:text-base font-semibold">
          KAZANÇLARIN DEVAMINI GÖRMEK İÇİN KAYDIR
        </p>
        <span class="inline-block ml-3"
          ><RightArrowIcon class="stroke-current text-primary"
        /></span>
      </div>
      <div class="relative h-[360px] md:h-[450px]">
        <div class="absolute w-full">
          <Carousel
            :items="whatWillIWinCarouselItems"
            class="bottom-0 py-16 md:py-20"
          >
            <template #iconbox="item">
              <div class="w-full h-5">
                <span
                  class="
                    absolute
                    w-16
                    h-16
                    md:w-28 md:h-28
                    grid
                    place-items-center
                    bg-primary
                    left-10
                    top-0
                    -translate-y-1/2
                  "
                >
                  <p
                    class="
                      w-10
                      md:w-16
                      h-10
                      md:h-16
                      font-black
                      text-white
                      grid
                      place-items-center
                      p-1
                    "
                  >
                    <component :is="item.icon" />
                  </p>
                </span>
              </div>
            </template>
            <template #default="item">
              <div class="flex flex-col justify-between h-full gap-5">
                <p
                  class="text-secondary text-3xl md:text-5xl"
                  v-html="item.upperText"
                ></p>
                <hr class="bg-primary h-1 w-1/2" />
              </div>
            </template>
          </Carousel>
        </div>
      </div>
    </section>
    <section
      id="application-process"
      class="w-full bg-white flex flex-col items-center p-5 pb-28 gap-4"
    >
      <h2
        class="
          text-3xl
          md:text-4xl
          lg:text-6xl
          font-extrabold
          text-secondary text-center
        "
        style="line-height: 1.2"
        data-aos="fade"
      >
        BAŞVURU SÜREÇLERİ
      </h2>
      <p
        class="
          text-primary text-center text-xl
          md:text-2xl
          lg:text-4xl
          font-medium
          w-5/6
          lg:w-3/5
          xl:w-2/5
        "
        data-aos="fade"
        data-aos-delay="150"
      >
        Başvurmak ve bu kariyer fırsatını yakalamak için aşağıdaki butona tıkla!
      </p>
      <div
        class="
          application-process-card
          bg-gray-100
          relative
          lg:h-96
          w-11/12
          2xl:w-5/6
        "
      >
        <div
          class="
            flex flex-col
            lg:flex-row
            pt-10
            md:pt-16
            lg:pt-24
            pb-20
            h-full
            gap-8
            lg:gap-2
          "
        >
          <div
            class="flex flex-1 gap-2 justify-center lg:justify-end"
            data-aos="fade-up"
          >
            <div
              class="
                text-2xl
                md:text-3xl
                3xl:text-5xl
                text-secondary
                pt-6
                pl-4
                relative
                w-52
                xl:w-72
                3xl:w-96
              "
            >
              <div
                class="
                  flex flex-col
                  absolute
                  top-0
                  left-0
                  -translate-x-14
                  md:-translate-x-16
                  xl:-translate-x-20
                  h-full
                "
              >
                <div
                  class="
                    w-14
                    h-14
                    md:w-16 md:h-16
                    xl:w-20 xl:h-20
                    grid
                    place-items-center
                    bg-primary
                    flex-shrink-0
                  "
                >
                  <StarOutlineIcon class="w-8 h-8" />
                </div>
                <div
                  class="
                    w-full
                    h-full
                    border-r border-primary border-opacity-50
                    relative
                  "
                >
                  <span
                    class="
                      w-2.5
                      h-2.5
                      bg-primary
                      absolute
                      bottom-0
                      right-0
                      translate-x-2.5 translate-y-2.5
                    "
                  ></span>
                </div>
              </div>
              Online <br /><strong
                >Değerlendirme<br />
                Aşamaları</strong
              >
            </div>
          </div>
          <div
            class="flex flex-1 gap-2 justify-center lg:justify-end"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              class="
                text-2xl
                md:text-3xl
                3xl:text-5xl
                text-secondary
                pt-6
                pl-4
                relative
                w-52
                xl:w-72
                3xl:w-96
              "
            >
              <div
                class="
                  flex flex-col
                  absolute
                  top-0
                  left-0
                  -translate-x-14
                  md:-translate-x-16
                  xl:-translate-x-20
                  h-full
                "
              >
                <div
                  class="
                    w-14
                    h-14
                    md:w-16 md:h-16
                    xl:w-20 xl:h-20
                    grid
                    place-items-center
                    bg-primary
                    flex-shrink-0
                  "
                >
                  <TentIcon class="w-8 h-8" />
                </div>
                <div
                  class="
                    w-full
                    h-full
                    border-r border-primary border-opacity-50
                    relative
                  "
                >
                  <span
                    class="
                      w-2.5
                      h-2.5
                      bg-primary
                      absolute
                      bottom-0
                      right-0
                      translate-x-2.5 translate-y-2.5
                    "
                  ></span>
                </div>
              </div>
              Yetenek <br /><strong>Kampı</strong>
            </div>
          </div>
          <div
            class="flex flex-1 gap-2 justify-center lg:justify-end"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              class="
                text-2xl
                md:text-3xl
                3xl:text-5xl
                text-secondary
                pt-6
                pl-4
                relative
                w-52
                xl:w-72
                3xl:w-96
              "
            >
              <div
                class="
                  flex flex-col
                  absolute
                  top-0
                  left-0
                  -translate-x-14
                  md:-translate-x-16
                  xl:-translate-x-20
                  h-full
                "
              >
                <div
                  class="
                    w-14
                    h-14
                    md:w-16 md:h-16
                    xl:w-20 xl:h-20
                    grid
                    place-items-center
                    bg-primary
                    flex-shrink-0
                  "
                >
                  <LaptopIcon class="w-8 h-8" />
                </div>
                <div
                  class="
                    w-full
                    h-full
                    border-r border-primary border-opacity-50
                    relative
                  "
                >
                  <span
                    class="
                      w-2.5
                      h-2.5
                      bg-primary
                      absolute
                      bottom-0
                      right-0
                      translate-x-2.5 translate-y-2.5
                    "
                  ></span>
                </div>
              </div>
              Online <br /><strong>Mülakat</strong>
            </div>
          </div>
        </div>
        <div
          class="
            absolute
            bottom-0
            left-0
            w-full
            z-10
            h-0
            flex
            justify-center
            items-center
          "
        >
          <DottedBordersWrapper
            :borderOpacity="0.6"
            class="active:scale-95 transition-transform"
            data-aos="fade"
            data-aos-delay="200"
          >
            <ActionButton
              class="whitespace-nowrap"
              v-scroll-to="'#application-form'"
              >HEMEN BAŞVUR</ActionButton
            >
          </DottedBordersWrapper>
        </div>
      </div>
    </section>
    <section
      id="application-form"
      class="
        w-full
        flex flex-col
        items-center
        gap-4
        px-2
        md:px-10
        pt-10
        md:pt-16
        pb-36
      "
    >
      <h2
        class="text-3xl md:text-6xl font-extrabold text-white text-center"
        style="line-height: 1.2"
      >
        BAŞVURU FORMU
      </h2>
      <DottedBordersWrapper
        borderColor="border-white"
        dotColor="bg-white"
        class="
          bg-white bg-opacity-10
          backdrop-blur-sm
          p-5
          md:p-10
          w-11/12
          lg:w-4/6
        "
      >
        <form
          name="job_application"
          method="POST"
          class="mb-10"
          netlify
          ref="form"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4">
            <input
              type="text"
              name="name_surname"
              class="px-4 py-3 placeholder-secondary text-sm md:text-base"
              placeholder="İsim Soyisim"
            />
            <input
              type="text"
              name="birthdate"
              class="px-4 py-3 placeholder-secondary text-sm md:text-base"
              placeholder="Doğum Tarihi - Gün & Ay & Yıl"
            />
            <input
              type="tel"
              name="phone_no"
              class="px-4 py-3 placeholder-secondary"
              placeholder="Telefon"
            />
            <input
              type="text"
              name="expected_grad_date"
              class="px-4 py-3 placeholder-secondary text-sm md:text-base"
              placeholder="Beklenen Mezuniyet Tarihi - Ay & Yıl"
            />
            <input
              type="email"
              name="email"
              class="px-4 py-3 placeholder-secondary text-sm md:text-base"
              placeholder="E-posta"
            />
            <select
              name="dep_1"
              class="px-4 py-3 placeholder-secondary text-sm md:text-base"
            >
              <option value="dep_1">Departman 1</option>
              <option value="dep_1_a">Departman 1.a</option>
              <option value="dep_1_b">Departman 1.b</option>
            </select>
            <select
              name="university"
              class="px-4 py-3 placeholder-secondary text-sm md:text-base"
            >
              <option value="">Üniversite</option>
              <option value="uni_ist_ayd">İstanbul Aydın Üniversitesi</option>
              <option value="uni_bog">Boğaziçi Üniversitesi</option>
              <option value="uni_lorem">Lorem Ipsum Üniversitesi</option>
              <option value="uni_dol_sit_amet">
                Dolar Sit Amet Üniversitesi
              </option>
              <option value="uni_ist_ayd_2">İstanbul Aydın Üniversitesi</option>
              <option value="uni_bog_2">Boğaziçi Üniversitesi</option>
              <option value="uni_lorem_2">Lorem Ipsum Üniversitesi</option>
              <option value="uni_dol_sit_amet_2">
                Dolar Sit Amet Üniversitesi
              </option>
            </select>
            <select
              name="dep_2"
              class="px-4 py-3 placeholder-secondary text-sm md:text-base"
            >
              <option value="dep_2">Departman 2</option>
              <option value="dep_2_a">Departman 2.a</option>
              <option value="dep_2_b">Departman 2.b</option>
            </select>

            <select
              name="major"
              class="px-4 py-3 placeholder-secondar text-sm md:text-base"
            >
              <option value="">Bölüm (Yüksek Lisans Dahil)</option>
              <option value="major_eng">Mühendislik</option>
              <option value="major_art">Güzel Sanatlar</option>
            </select>
            <select
              name="dep_3"
              class="w-full h-full placeholder-secondary text-sm md:text-base"
            >
              <option value="">Departman 3</option>
              <option value="dep_3_a">Departman 3.a</option>
              <option value="dep_3_b">Departman 3.b</option>
            </select>
            <input
              type="text"
              name="class"
              class="px-4 py-3 placeholder-secondary text-sm md:text-base"
              placeholder="Sınıf"
            />
          </div>
          <input
            type="submit"
            class="hidden"
            name="form-name"
            value="job_application"
            ref="submitBtn"
          />
        </form>
        <div
          class="
            absolute
            bottom-0
            left-0
            w-full
            z-10
            h-0
            flex
            justify-center
            items-center
          "
        >
          <DottedBordersWrapper
            :borderOpacity="0.6"
            class="active:scale-95 transition-transform"
          >
            <ActionButton class="whitespace-nowrap">HEMEN BAŞVUR</ActionButton>
          </DottedBordersWrapper>
        </div>
      </DottedBordersWrapper>
    </section>
    <section
      id="faq"
      class="
        w-full
        bg-white
        flex flex-col
        items-center
        pt-10
        pb-16
        md:pb-32
        px-8
        md:px-16
        gap-10
      "
    >
      <h2
        class="text-3xl md:text-6xl font-extrabold text-primary text-center"
        style="line-height: 1.2"
      >
        SIKÇA SORULAN<br />
        SORULAR
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
        <div class="flex" data-aos="fade">
          <div
            class="
              flex-shrink-0
              grid
              place-items-center
              w-16
              h-16
              md:w-20 md:h-20
              bg-primary
            "
          >
            <div class="w-2.5 h-2.5 bg-white"></div>
          </div>
          <div class="border border-primary p-5 flex flex-col gap-5">
            <h3 class="text-2xl md:text-4xl text-secondary font-bold">
              Programa başvurduktan sonra hangi aşamalara dahil olacağım?
            </h3>
            <div class="w-1/5 h-1 bg-yellow-700"></div>
            <p class="text-base md:text-2xl font-medium pl-8">
              Programa başvurduktan sonra, online değerlendirme aşamalarımızla
              ilgili seni bilgilendireceğiz. Aşamaları olumlu tamamlayan
              adaylarımız, çalışmak veya staj yapmak istedikleri departmanın
              yöneticileri ile birebir online mülakat gerçekleştirerek
              süreçlerini tamamlayacaklar.
            </p>
          </div>
        </div>
        <div class="flex" data-aos="fade" data-aos-delay="100">
          <div
            class="
              flex-shrink-0
              grid
              place-items-center
              w-16
              h-16
              md:w-20 md:h-20
              bg-primary
            "
          >
            <div class="w-2.5 h-2.5 bg-white"></div>
          </div>
          <div class="border border-primary p-5 flex flex-col gap-5">
            <h3 class="text-2xl md:text-4xl text-secondary font-bold">
              JOB bana neler kazandıracak?
            </h3>
            <div class="w-1/5 h-1 bg-yellow-700"></div>
            <p class="text-base md:text-2xl font-medium pl-8">
              JOB programı ile global şirket yapısını daha yakından görebilir,
              farklı fonksiyonlarda çalışma deneyimi elde edebilir ve sunduğumuz
              gelişim programları ile kariyerine güçlü adımlarla
              başlayabilirsin!
            </p>
          </div>
        </div>
        <div class="flex" data-aos="fade">
          <div
            class="
              flex-shrink-0
              grid
              place-items-center
              w-16
              h-16
              md:w-20 md:h-20
              bg-primary
            "
          >
            <div class="w-2.5 h-2.5 bg-white"></div>
          </div>
          <div class="border border-primary p-5 flex flex-col gap-5">
            <h3 class="text-2xl md:text-4xl text-secondary font-bold">
              Staj programının süresi ne olacak?
            </h3>
            <div class="w-1/5 h-1 bg-yellow-700"></div>
            <p class="text-base md:text-2xl font-medium pl-8">
              Virtual JOB Experience gelişim stajımız online 1 ay sürecek olup,
              detaylı departman tanıtımları, networking fırsatı ve gelişim
              programlarından oluşmaktadır. JOB Proje Bazlı stajımız 2 ay
              sürecek olup, departmanlarda çalışma deneyimi olarak
              gerçekleşecektir.
            </p>
          </div>
        </div>
        <div class="flex" data-aos="fade" data-aos-delay="100">
          <div
            class="
              flex-shrink-0
              grid
              place-items-center
              w-16
              h-16
              md:w-20 md:h-20
              bg-primary
            "
          >
            <div class="w-2.5 h-2.5 bg-white"></div>
          </div>
          <div class="border border-primary p-5 flex flex-col gap-5">
            <h3 class="text-2xl md:text-4xl text-secondary font-bold">
              Online mı, fiziksel olarak mı gerçekleştirilecek?
            </h3>
            <div class="w-1/5 h-1 bg-yellow-700"></div>
            <p class="text-base md:text-2xl font-medium pl-8">
              Virtual JOB Experience gelişim stajı online olarak, JOB Proje
              Bazlı Staj ise stajın gerçekleşeceği departmanın çalışma şekline
              uygun olarak gerçekleşecektir.
            </p>
          </div>
        </div>
        <div class="flex" data-aos="fade">
          <div
            class="
              flex-shrink-0
              grid
              place-items-center
              w-16
              h-16
              md:w-20 md:h-20
              bg-primary
            "
          >
            <div class="w-2.5 h-2.5 bg-white"></div>
          </div>
          <div class="border border-primary p-5 flex flex-col gap-5">
            <h3 class="text-2xl md:text-4xl text-secondary font-bold">
              Herhangi bir sorun yaşarsam nasıl iletişime geçebilirim?
            </h3>
            <div class="w-1/5 h-1 bg-yellow-700"></div>
            <p class="text-base md:text-2xl font-medium pl-8">
              Tüm soruların için
              <strong class="text-secondary"
                ><a href="mailto:job@yildizholding.com.tr"
                  >job@yildizholding.com.tr</a
                ></strong
              >
              adresine mail atabilirsin.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  data() {
    return {
      whatWillIWinCarouselItems: [
        {
          icon: 'UniHatIcon',
          upperText:
            'Yıldız Akademi Kapsamında Sertifikalı <strong>Eğitim Fırsatları</strong>',
          lowerText: '',
        },
        {
          icon: 'SuccessBadgeIcon',
          upperText:
            'Endüstri 4.0, Yapay Zeka, Veri Bilimi <strong>Dijital Yetkinlik Kazanım Programları</strong>',
          lowerText: '',
        },
        {
          icon: 'BookIcon',
          upperText:
            '16,000’den Fazla Eğitimin Bulunduğu <strong>Gelişim Kütüphanesi</strong>',
          lowerText: '',
        },
        {
          icon: 'SpeakerIcon',
          upperText:
            'Üst Yöneticiler ile <strong>Tea Talk Etkinlikleri</strong>',
          lowerText: '',
        },
        {
          icon: 'PuzzleIcon',
          upperText: 'Uzmanlardan <strong>Birebir Koçluk ve Mentorluk</strong>',
          lowerText: '',
        },
        {
          icon: 'ChatIcon',
          upperText:
            'Departman Liderleri ile Webinar’lar ve <strong>Soru-Cevap Etkinlikleri</strong>',
          lowerText: '',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.main-section {
  background-image: url('~assets/images/BG.png');
}
#program {
  background-image: url('~assets/images/program-bg.png');
}
#who-can-join {
  background-image: url('~assets/images/who-can-join-bg.png');
}
#what-will-i-win {
  background-image: url('~assets/images/what-will-i-win-bg.png');
}
#application-form {
  background-image: url('~assets/images/application-form-bg.png');
}
.application-process-card {
  background-image: url('~assets/images/application-process-bg.png');
}
</style>