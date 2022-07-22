<template>
  <div class="min-h-[5000px] bg-gray-300">
    <section
      class="
        main-section
        relative
        w-full
        bg-cover bg-center bg-no-repeat
        min-h-screen
      "
    >
      <Logo class="absolute left-0 top-0" />
      <div class="flex justify-center w-full relative top-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="663"
          height="430"
          viewBox="0 0 663 430"
          class=""
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
      <div class="absolute w-full flex flex-col bottom-20">
        <div class="mb-14">
          <DottedBordersWrapper
            dotColor="bg-white"
            borderColor="border-white"
            :borderOpacity="0.6"
            class="
              absolute
              left-20
              p-5
              bg-primary bg-opacity-10
              backdrop-blur-sm
              flex
              justify-center
            "
            style="width: fit-content"
          >
            <p class="w-[458px] text-2xl font-medium text-white">
              Apply to our award-winning JOB Young Talent Program for
              recruitment (new graduate), internship and development
              opportunities in a global company with new working models!
            </p>
          </DottedBordersWrapper>
        </div>
        <div
          class="
            flex
            justify-between
            ml-auto
            mr-48
            border border-white border-opacity-30
          "
          style="width: 72%"
        >
          <DottedBordersWrapper
            dotColor="bg-white"
            borderColor="border-white"
            :borderOpacity="0.6"
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
            <ActionButton> HEMEN BAŞVUR </ActionButton>
          </DottedBordersWrapper>
        </div>
      </div>
    </section>
    <VerticalNavbar class="z-50" />
    <section id="about" class="bg-white">
      <div class="mx-auto py-24 flex flex-col items-center">
        <h2 class="text-center text-6xl font-extrabold text-red-900 mb-7">
          JOB@YıldızHolding<br />
          NEDİR?
        </h2>
        <DottedBordersWrapper :borderOpacity="0.6" class="w-3/5">
          <p class="text-center text-red-900 p-10 text-3xl">
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
      class="w-full bg-cover bg-center bg-no-repeat py-32 text-black"
    >
      <div
        class="
          w-3/5
          mx-auto
          border border-secondary
          flex
          divide-x-2 divide-secondary
          mb-16
        "
      >
        <div
          class="
            flex-auto flex-nowrap
            p-4
            text-3xl
            font-bold
            text-center text-white
            bg-primary
          "
        >
          İŞE ALIM PROGRAMI 2022
        </div>
        <div
          class="
            flex-auto flex-nowrap
            p-4
            text-3xl
            font-medium
            text-secondary text-center
          "
        >
          JOB PROJE BAZLI STAJ 2022
        </div>
        <div
          class="
            flex-auto flex-nowrap
            p-4
            text-3xl
            font-medium
            text-secondary text-center
          "
        >
          VJE 2022
        </div>
      </div>
      <div class="w-full flex justify-end items-center mt-4 mx-auto px-32">
        <p class="text-secondary text-base font-semibold">
          PROGRAMIN DEVAMINI GÖRMEK İÇİN KAYDIR
        </p>
        <span class="inline-block ml-3"
          ><RightArrowIcon class="stroke-current text-primary"
        /></span>
      </div>
      <Carousel :items="currentProgramItems" />
    </section>
    <section
      id="who-can-join"
      class="w-full bg-cover bg-center bg-no-repeat p-48"
    >
      <div class="flex w-3/5 mx-auto gap-6">
        <div class="">
          <div
            class="
              w-40
              h-40
              bg-white bg-opacity-10
              backdrop-blur-sm
              grid
              place-items-center
            "
          >
            <QuestionBubbleIcon class="w-24 h-24" />
          </div>
        </div>
        <div class="flex flex-col justify-center text-white">
          <h2 class="text-6xl font-extrabold" style="line-height: 1.3">
            KİMLER<br />KATILABİLİR?
          </h2>
          <DottedBordersWrapper
            borderColor="border-white"
            dotColor="bg-white"
            class="bg-white bg-opacity-10 backdrop-blur-sm text-4xl p-10"
          >
            Üniversite 3. Sınıf, 4. Sınıf veya Yüksek Lisans programlarında
            öğrenim gören ve kariyerine parlak bir şirkette yön vermek isteyen
            öğrenciler ve yeni mezunlar.
            <span class="absolute z-10 h-0 bottom-6 -right-32">
              <DottedBordersWrapper
                dotColor="bg-white"
                borderColor="border-white"
                :borderOpacity="0.6"
                class="active:scale-95 transition-transform"
              >
                <ActionButton class="whitespace-nowrap"
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
      class="w-full bg-cover bg-center bg-no-repeat p-32"
    >
      <div class="flex w-4/5 gap-6">
        <div class="">
          <div class="w-40 h-40 bg-white grid place-items-center">
            <HandIcon class="w-24 h-24 fill-current text-primary" />
          </div>
        </div>
        <div class="flex flex-col justify-center">
          <h2
            class="text-6xl font-extrabold text-secondary"
            style="line-height: 1.3"
          >
            NELER <br />KAZANACAĞIM?
          </h2>
          <p class="text-primary text-4xl font-medium pl-20 w-5/6">
            Kariyerine güçlü bir başlangıç yapmak için ihtiyacın olacak tüm
            gelişim alanları!
          </p>
        </div>
      </div>
      <div class="w-full flex justify-end items-center mt-4">
        <p class="text-secondary text-base font-semibold">
          KAZANÇLARIN DEVAMINI GÖRMEK İÇİN KAYDIR
        </p>
        <span class="inline-block ml-3"
          ><RightArrowIcon class="stroke-current text-primary"
        /></span>
      </div>
    </section>
    <section
      id="application-process"
      class="w-full h-96 bg-white flex flex-col items-center p-10 gap-4"
    >
      <h2
        class="text-6xl font-extrabold text-secondary text-center"
        style="line-height: 1.2"
      >
        BAŞVURU SÜREÇLERİ
      </h2>
      <p class="text-primary text-center text-4xl font-medium w-2/5">
        Başvurmak ve bu kariyer fırsatını yakalamak için aşağıdaki butona tıkla!
      </p>
    </section>
    <section
      id="application-form"
      class="w-full flex flex-col items-center gap-4 px-10 pt-16 pb-36"
    >
      <h2
        class="text-6xl font-extrabold text-white text-center"
        style="line-height: 1.2"
      >
        BAŞVURU FORMU
      </h2>
      <DottedBordersWrapper
        borderColor="border-white"
        dotColor="bg-white"
        class="bg-white bg-opacity-10 backdrop-blur-sm text-4xl p-10 w-4/6"
      >
        <form action="" class="mb-10">
          <div class="grid grid-cols-2 gap-x-3 gap-y-4">
            <input
              type="text"
              name=""
              id=""
              class="px-4 py-3 placeholder-secondary"
              placeholder="İsim Soyisim"
            />
            <input
              type="text"
              name=""
              id=""
              class="px-4 py-3 placeholder-secondary"
              placeholder="Doğum Yılı - Gün & Ay & Yıl"
            />
            <input
              type="tel"
              name=""
              id=""
              class="px-4 py-3 placeholder-secondary"
              placeholder="Telefon"
            />
            <input
              type="text"
              name=""
              id=""
              class="px-4 py-3 placeholder-secondary"
              placeholder="Beklenen Mezuniyet Tarihi - Ay & Yıl"
            />
            <input
              type="email"
              name=""
              id=""
              class="px-4 py-3 placeholder-secondary"
              placeholder="E-posta"
            />
            <select name="" id="" class="px-4 py-3 placeholder-secondary">
              <option value="">Departman 1</option>
              <option value="">Departman 1.a</option>
              <option value="">Departman 1.b</option>
            </select>
            <select name="" id="" class="px-4 py-3 placeholder-secondary">
              <option value="">Üniversite</option>
              <option value="">İstanbul Aydın Üniversitesi</option>
              <option value="">Boğaziçi Üniversitesi</option>
              <option value="">Lorem Ipsum Üniversitesi</option>
              <option value="">Dolar Sit Amet Üniversitesi</option>
              <option value="">İstanbul Aydın Üniversitesi</option>
              <option value="">Boğaziçi Üniversitesi</option>
              <option value="">Lorem Ipsum Üniversitesi</option>
              <option value="">Dolar Sit Amet Üniversitesi</option>
            </select>
            <select name="" id="" class="px-4 py-3 placeholder-secondary">
              <option value="">Departman 2</option>
              <option value="">Departman 2.a</option>
              <option value="">Departman 2.b</option>
            </select>

            <select name="" id="" class="px-4 py-3 placeholder-secondar">
              <option value="">Bölüm (Yüksek Lisans Dahil)</option>
              <option value="">Mühendislik</option>
              <option value="">Güzel Sanatlar</option>
            </select>
            <select name="" id="" class="w-full h-full placeholder-secondary">
              <option value="">Departman 3</option>
              <option value="">Departman 3.a</option>
              <option value="">Departman 3.b</option>
            </select>
            <input
              type="text"
              name=""
              id=""
              class="px-4 py-3 placeholder-secondary"
              placeholder="Sınıf"
            />
          </div>
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
    <section id="faq" class="w-full h-96 bg-white flex justify-center p-10">
      <h2
        class="text-6xl font-extrabold text-primary text-center"
        style="line-height: 1.2"
      >
        SIKÇA SORULAN<br />
        SORULAR
      </h2>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      programCarouselData: {
        selectedTabIndex: 0,
        items: [
          [
            {
              icon: 1,
              upperText: 'Online Genel Yetenek Testi',
              lowerText: 'Online İngilizce Testi',
            },
            {
              icon: 2,
              upperText: 'Online Video Mülakat',
              lowerText: 'Online Temel Yetkinlik Envanteri',
            },
            { icon: 3, upperText: 'Online Case Challenge', lowerText: '' },
            { icon: 4, upperText: 'Genel Yetenek Kampı', lowerText: '' },
            {
              icon: 5,
              upperText: 'Departmanlar ile Online Mülakat',
              lowerText: '',
            },
            { icon: 6, upperText: 'Yıldız Ol ve Parla', lowerText: '' },
          ],
        ],
      },
    }
  },
  computed: {
    currentProgramItems() {
      return this.programCarouselData.items[
        this.programCarouselData.selectedTabIndex
      ]
    },
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
</style>