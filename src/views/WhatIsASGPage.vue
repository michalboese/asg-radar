<script setup>
import BaseCard from '@/components/base/BaseCard.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout class="mt-5">
    <template v-slot:main>
      <BaseContainer>
        <h1 style="font-size: 48px">Czym jest Airsoft?</h1>
        <p class="mt-8">
          Airsoft to sport zespołowy polegający na symulacji działań militarnych przy użyciu replik
          broni palnej, które strzelają plastikowymi kulkami (BB). Uczestnicy, nazywani graczami
          airsoft, biorą udział w scenariuszach taktycznych, które mogą obejmować różne misje, takie
          jak zdobywanie flag, ochrona VIP-a, lub eliminacja przeciwnika. Airsoft to nie tylko
          sport, ale także hobby, które pozwala na rozwijanie umiejętności taktycznych, fizycznych i
          społecznych w bezpiecznym i kontrolowanym środowisku.
        </p>
        <v-row>
          <v-col class="mt-16">
            <BaseCard
              variant="outlined"
              prepend-icon="mdi-battery-charging-medium"
              title="Taktyczna adrenalina"
              class="mx-auto card"
              hover
            ></BaseCard>
          </v-col>
          <v-col class="mt-16">
            <BaseCard
              variant="outlined"
              prepend-icon="mdi-library"
              title="Lokalne starcia"
              class="mx-auto card"
              hover
            ></BaseCard>
          </v-col>
          <v-col class="mt-16">
            <BaseCard
              variant="outlined"
              prepend-icon="mdi-campfire"
              title="Walcz i przetrwaj"
              class="mx-auto card"
              hover
            >
            </BaseCard>
          </v-col>
          <v-col class="mt-16">
            <BaseCard
              variant="outlined"
              prepend-icon="mdi-pistol"
              title="Militarny realizm"
              class="mx-auto card"
              hover
            ></BaseCard>
          </v-col>
        </v-row>

        <h1 class="mt-16">Oto kilka kluczowych informacji na temat ASG:</h1>
        <ul class="ml-15 mt-8">
          <li>
            <h2>Repliki broni</h2>
            <p>
              Airsoft używa replik broni palnej, które są wiernymi odwzorowaniami prawdziwych broni,
              ale strzelają jedynie plastikowymi kulkami o średnicy 6 mm. Repliki te są zasilane
              elektrycznie (AEG), gazem (GBB) lub sprężynowo (springer)
            </p>
          </li>
          <br />
          <li>
            <h2>Bezpieczeństwo</h2>
            <p>
              Podczas gry obowiązkowe jest noszenie ochrony oczu (gogli lub masek) oraz często także
              ochrony twarzy. Wiele organizacji wymaga także używania innych środków ochrony, takich
              jak kamizelki, hełmy czy rękawice
            </p>
          </li>
          <br />
          <li>
            <h2>Scenariusze</h2>
            <p>
              Gry airsoft mogą mieć różnorodne scenariusze, od prostych gier typu „team deathmatch”
              po skomplikowane misje militarnej symulacji (MilSim). Scenariusze mogą być krótkie
              (kilka minut) lub długotrwałe (nawet kilka dni)
            </p>
          </li>
          <br />
          <li>
            <h2>Organizacja</h2>
            <p>
              Gry airsoft organizowane są zarówno przez kluby i stowarzyszenia, jak i przez
              komercyjne firmy. Mogą odbywać się na specjalnie przygotowanych poligonach,
              opuszczonych budynkach, lasach czy innych terenach
            </p>
          </li>
          <br />
          <li>
            <h2>Społeczność</h2>
            <p>
              Airsoft przyciąga szerokie grono entuzjastów militariów, taktyki i strategii. Wspólne
              gry sprzyjają integracji i budowaniu społeczności, gdzie gracze często dzielą się
              doświadczeniami i wiedzą na temat taktyk oraz sprzętu
            </p>
          </li>
          <br />
          <li>
            <h2>Prawo</h2>
            <p>
              Regulacje dotyczące airsoft różnią się w zależności od kraju. W niektórych miejscach
              posiadanie replik broni wymaga rejestracji lub spełnienia określonych wymogów prawnych
            </p>
          </li>
        </ul>
      </BaseContainer>
    </template>
  </MainLayout>
</template>
<style scoped>
p {
  font-size: larger;
}

.card {
  height: 60px;
}
</style>
