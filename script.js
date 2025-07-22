
const { createApp, ref, reactive, onMounted, onUnmounted, computed } = Vue;

    createApp({
        setup() {

            const birthdate = ref('');
            const age = reactive({
                years: 0,
                months: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            });

            let timer = null;

            function calculateAge() {
                if (!birthdate.value) return;

                const birth = new Date(birthdate.value);
                const now = new Date();
                const diff = now.getTime() - birth.getTime();

                console.log(birth.getTime());
              
                const ageInS = diff / 1000;
                const ageInMins = ageInS / 60;
                const ageInHrs = ageInMins / 60;
                const ageInDays = ageInHrs / 24;
                const ageInMonths = ageInDays / 30.4375;
                const ageInYears = ageInMonths / 12;

                age.years = Math.floor(ageInYears);
                age.months = Math.floor(ageInMonths % 12);
                age.days = Math.floor(ageInDays % 30.4375);
                age.hours = Math.floor(ageInHrs % 24);
                age.minutes = Math.floor(ageInMins % 60);
                age.seconds = Math.floor(ageInS % 60);
                
            }

            const healthAdvice = computed(() => {

              const y = age.years;
              if (y < 5) return "Pastikan anak mendapat imunisasi lengkap dan ASI eksklusif. 👶🏻";
              else if (y >= 5 && y < 13) return "Ajak anak bermain di luar dan makan makanan bergizi. 🧒🏻", Image="";
              else if (y >= 13 && y < 20) return "Remaja butuh istirahat cukup, olahraga dan hindari stres. 👦🏻 ";
              else if (y >= 20 && y < 40) return "Jaga pola makan, olahraga teratur, dan cek kesehatan tahunan. 👱🏻‍♀️";
              else if (y >= 40 && y < 60) return "Pantau tekanan darah dan kolesterol secara berkala. 👵🏻";
              else return "Periksa kesehatan rutin dan jaga aktivitas fisik secara konsisten. 👽";
            });

            function start() {
                if (timer) clearInterval(timer);
                calculateAge()
                timer = setInterval(calculateAge, 1000);
                console.log('Start has running!');
            }

            function reset() {
                birthdate.value = '';
                Object.assign(age, {years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0});
                clearInterval(timer);
            }
           

             onUnmounted(() => clearInterval(timer));

            return { birthdate, age, healthAdvice, start, reset};

        }
    }).mount('#app');

    