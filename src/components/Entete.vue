<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
</script>

<template>
  <div id="top-barre">
    <div id="img-logo">
      <router-link to="/">
        <img
          src="https://cdn.shopify.com/s/files/1/0591/7769/7445/files/Upway_Logo_RGB_Dark_Blue-cropped.png?v=1737388577&width=900"
          alt="UPWAY"
        />
      </router-link>
    </div>

    <div id="input-search">
      <div id="input-container">
        <input
          type="text"
          name="recherche"
          id="search"
          placeholder="Rechercher par marque, modèle..."
        />

        <button id="cancel-search">
          <svg
            width="14"
            height="14"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
          >
            <path d="M1 1L8.99963 8.99963" stroke-width="1.5" stroke-linecap="round" />
            <path d="M9 1L1.00037 8.99963" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>

        <button id="enter-search">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.96582 10.2124C4.96582 7.37213 7.26831 5.06964 10.1086 5.06964C12.9488 5.06964 15.2513 7.37213 15.2513 10.2124C15.2513 13.0527 12.9488 15.3551 10.1086 15.3551C7.26831 15.3551 4.96582 13.0527 4.96582 10.2124ZM10.1086 3.56964C6.43988 3.56964 3.46582 6.5437 3.46582 10.2124C3.46582 13.8811 6.43988 16.8551 10.1086 16.8551C11.6727 16.8551 13.1106 16.3146 14.2455 15.41L18.8383 20.0028C19.1312 20.2957 19.6061 20.2957 19.8989 20.0028C20.1918 19.7099 20.1918 19.235 19.8989 18.9421L15.3062 14.3493C16.2107 13.2144 16.7513 11.7765 16.7513 10.2124C16.7513 6.5437 13.7773 3.56964 10.1086 3.56964Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>

    <div id="aide" style="min-width: 120px">
      <a href=""
        >Aide au choix
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="#1C1535"
          class="absolute top-0 right-0"
        >
          <path
            d="M15.8669 7.84722L9.35554 6.87122C9.24215 6.85151 9.14847 6.76279 9.13372 6.6494L8.15772 0.133087C8.14296 0.0443623 8.07394 0 8.00002 0C7.92605 0 7.85707 0.0443623 7.84227 0.133087L6.86632 6.6445C6.84656 6.75783 6.75783 6.85151 6.6445 6.86632L0.133087 7.84722C-0.0443623 7.87183 -0.0443623 8.13311 0.133087 8.15772L6.6445 9.13372C6.75783 9.15342 6.85151 9.24215 6.86632 9.35554L7.84227 15.8669C7.85707 15.9556 7.92605 16 8.00002 16C8.07394 16 8.14296 15.9556 8.15772 15.8669L9.13372 9.35554C9.15342 9.24215 9.24215 9.14847 9.35554 9.13372L15.8669 8.15772C16.0443 8.13311 16.0443 7.87183 15.8669 7.84722Z"
          />
        </svg>
      </a>
    </div>

    <div id="svg-info">
      <a>
        <img
          src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.125%2014.875C11.125%2015.0975%2011.059%2015.315%2010.9354%2015.5C10.8118%2015.685%2010.6361%2015.8292%2010.4305%2015.9144C10.225%2015.9995%209.99876%2016.0218%209.78053%2015.9784C9.5623%2015.935%209.36184%2015.8278%209.20451%2015.6705C9.04718%2015.5132%208.94003%2015.3127%208.89662%2015.0945C8.85321%2014.8762%208.87549%2014.65%208.96064%2014.4445C9.04579%2014.2389%209.18998%2014.0632%209.37499%2013.9396C9.55999%2013.816%209.7775%2013.75%2010%2013.75C10.2984%2013.75%2010.5845%2013.8685%2010.7955%2014.0795C11.0065%2014.2905%2011.125%2014.5766%2011.125%2014.875ZM10%204.75C7.93188%204.75%206.25%206.26406%206.25%208.125V8.5C6.25%208.69891%206.32902%208.88968%206.46967%209.03033C6.61033%209.17098%206.80109%209.25%207%209.25C7.19892%209.25%207.38968%209.17098%207.53033%209.03033C7.67099%208.88968%207.75%208.69891%207.75%208.5V8.125C7.75%207.09375%208.75969%206.25%2010%206.25C11.2403%206.25%2012.25%207.09375%2012.25%208.125C12.25%209.15625%2011.2403%2010%2010%2010C9.80109%2010%209.61033%2010.079%209.46967%2010.2197C9.32902%2010.3603%209.25%2010.5511%209.25%2010.75V11.5C9.25%2011.6989%209.32902%2011.8897%209.46967%2012.0303C9.61033%2012.171%209.80109%2012.25%2010%2012.25C10.1989%2012.25%2010.3897%2012.171%2010.5303%2012.0303C10.671%2011.8897%2010.75%2011.6989%2010.75%2011.5V11.4325C12.46%2011.1184%2013.75%209.75437%2013.75%208.125C13.75%206.26406%2012.0681%204.75%2010%204.75ZM19.75%2010C19.75%2011.9284%2019.1782%2013.8134%2018.1068%2015.4168C17.0355%2017.0202%2015.5127%2018.2699%2013.7312%2019.0078C11.9496%2019.7458%209.98919%2019.9389%208.09787%2019.5627C6.20656%2019.1865%204.46928%2018.2579%203.10571%2016.8943C1.74215%2015.5307%200.813554%2013.7934%200.437348%2011.9021C0.061142%2010.0108%200.254225%208.05042%200.992179%206.26884C1.73013%204.48726%202.97982%202.96451%204.58319%201.89317C6.18657%200.821828%208.07164%200.25%2010%200.25C12.585%200.25273%2015.0634%201.28084%2016.8913%203.10872C18.7192%204.93661%2019.7473%207.41498%2019.75%2010ZM18.25%2010C18.25%208.3683%2017.7661%206.77325%2016.8596%205.41655C15.9531%204.05984%2014.6646%203.00242%2013.1571%202.37799C11.6497%201.75357%209.99085%201.59019%208.39051%201.90852C6.79017%202.22685%205.32016%203.01259%204.16637%204.16637C3.01259%205.32015%202.22685%206.79016%201.90853%208.3905C1.5902%209.99085%201.75358%2011.6496%202.378%2013.1571C3.00242%2014.6646%204.05984%2015.9531%205.41655%2016.8596C6.77326%2017.7661%208.36831%2018.25%2010%2018.25C12.1873%2018.2475%2014.2843%2017.3775%2015.8309%2015.8309C17.3775%2014.2843%2018.2475%2012.1873%2018.25%2010Z'%20fill='black'%20/%3e%3c/svg%3e"
        />
      </a>
    </div>

    <div id="favoris-svg">
      <a>
        <img
          src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.6875%203.75C14.7516%203.75%2013.0566%204.5825%2012%205.98969C10.9434%204.5825%209.24844%203.75%207.3125%203.75C5.77146%203.75174%204.29404%204.36468%203.20436%205.45436C2.11468%206.54404%201.50174%208.02146%201.5%209.5625C1.5%2016.125%2011.2303%2021.4369%2011.6447%2021.6562C11.7539%2021.715%2011.876%2021.7458%2012%2021.7458C12.124%2021.7458%2012.2461%2021.715%2012.3553%2021.6562C12.7697%2021.4369%2022.5%2016.125%2022.5%209.5625C22.4983%208.02146%2021.8853%206.54404%2020.7956%205.45436C19.706%204.36468%2018.2285%203.75174%2016.6875%203.75ZM12%2020.1375C10.2881%2019.14%203%2014.5959%203%209.5625C3.00149%208.41921%203.45632%207.32317%204.26475%206.51475C5.07317%205.70632%206.16921%205.25149%207.3125%205.25C9.13594%205.25%2010.6669%206.22125%2011.3062%207.78125C11.3628%207.91881%2011.4589%208.03646%2011.5824%208.11926C11.7059%208.20207%2011.8513%208.24627%2012%208.24627C12.1487%208.24627%2012.2941%208.20207%2012.4176%208.11926C12.5411%208.03646%2012.6372%207.91881%2012.6937%207.78125C13.3331%206.21844%2014.8641%205.25%2016.6875%205.25C17.8308%205.25149%2018.9268%205.70632%2019.7353%206.51475C20.5437%207.32317%2020.9985%208.41921%2021%209.5625C21%2014.5884%2013.71%2019.1391%2012%2020.1375Z'%20fill='black'%20/%3e%3c/svg%3e"
        />
      </a>
    </div>

    <div id="panier-svg">
      <router-link to="/panier">
        <img
          src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2020.25C9.75%2020.5467%209.66203%2020.8367%209.4972%2021.0834C9.33238%2021.33%209.09811%2021.5223%208.82403%2021.6358C8.54994%2021.7494%208.24834%2021.7791%207.95736%2021.7212C7.66639%2021.6633%207.39912%2021.5204%207.18934%2021.3107C6.97956%2021.1009%206.8367%2020.8336%206.77882%2020.5426C6.72094%2020.2517%206.75065%2019.9501%206.86418%2019.676C6.97771%2019.4019%207.16997%2019.1676%207.41665%2019.0028C7.66332%2018.838%207.95333%2018.75%208.25%2018.75C8.64782%2018.75%209.02936%2018.908%209.31066%2019.1893C9.59196%2019.4706%209.75%2019.8522%209.75%2020.25ZM18%2018.75C17.7033%2018.75%2017.4133%2018.838%2017.1666%2019.0028C16.92%2019.1676%2016.7277%2019.4019%2016.6142%2019.676C16.5006%2019.9501%2016.4709%2020.2517%2016.5288%2020.5426C16.5867%2020.8336%2016.7296%2021.1009%2016.9393%2021.3107C17.1491%2021.5204%2017.4164%2021.6633%2017.7074%2021.7212C17.9983%2021.7791%2018.2999%2021.7494%2018.574%2021.6358C18.8481%2021.5223%2019.0824%2021.33%2019.2472%2021.0834C19.412%2020.8367%2019.5%2020.5467%2019.5%2020.25C19.5%2019.8522%2019.342%2019.4706%2019.0607%2019.1893C18.7794%2018.908%2018.3978%2018.75%2018%2018.75ZM22.4728%206.95062L20.0691%2015.6019C19.9369%2016.0745%2019.6542%2016.4911%2019.2639%2016.7885C18.8736%2017.0859%2018.397%2017.2479%2017.9062%2017.25H8.64C8.14784%2017.2498%207.66926%2017.0886%207.27725%2016.791C6.88523%2016.4935%206.6013%2016.0758%206.46875%2015.6019L3.18%203.75H1.5C1.30109%203.75%201.11032%203.67098%200.96967%203.53033C0.829018%203.38968%200.75%203.19891%200.75%203C0.75%202.80109%200.829018%202.61032%200.96967%202.46967C1.11032%202.32902%201.30109%202.25%201.5%202.25H3.75C3.91397%202.24997%204.07343%202.30367%204.20398%202.40289C4.33452%202.50211%204.42895%202.64138%204.47281%202.79938L5.36156%206H21.75C21.8656%205.99998%2021.9797%206.02669%2022.0833%206.07805C22.1869%206.1294%2022.2772%206.20401%2022.3472%206.29605C22.4171%206.38809%2022.4649%206.49506%2022.4867%206.60861C22.5085%206.72216%2022.5037%206.83922%2022.4728%206.95062ZM20.7628%207.5H5.77875L7.91719%2015.2006C7.96105%2015.3586%208.05548%2015.4979%208.18602%2015.5971C8.31657%2015.6963%208.47603%2015.75%208.64%2015.75H17.9062C18.0702%2015.75%2018.2297%2015.6963%2018.3602%2015.5971C18.4908%2015.4979%2018.5852%2015.3586%2018.6291%2015.2006L20.7628%207.5Z'%20fill='black'%20/%3e%3c/svg%3e"
        />
      </router-link>
    </div>
  </div>

  <div id="navigation">
    <nav>
      <div id="nav-container">
        <router-link to="/" id="nav-acc"> Accueil</router-link>
        <router-link to="/about" id="nav-inf"> Informations à propos de nous</router-link>
        <router-link to="/velos" id="nav-vel"> Vélos</router-link>
        <router-link to="/accessoires" id="nav-acs"> Nos Accessoires</router-link>
        <router-link to="/articles" id="nav-act"> Actualités</router-link>
        <router-link to="/marques" id="nav-mar"> Marques</router-link>
        <router-link to="/magasins" id="nav-mag"> Magasins</router-link>
      </div>

      <div id="nav-connection">
        <router-link v-if="userStore.connected && userStore.current && userStore.current.usertype === 'Admin'" to="/admin">
          <div id="login-user">
            <svg v-if="userStore.connected"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="0.096"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6.00001 21V15.3426C6.00001 15.1158 5.96145 14.8908 5.88599 14.6769L3.35382 7.50248C3.15169 6.92978 3.40765 6.29618 3.95086 6.02457C4.5347 5.73265 5.24482 5.95902 5.552 6.53498L9.00001 13M18 21V15.3426C18 15.1158 18.0386 14.8908 18.114 14.6769L20.6462 7.50248C20.8483 6.92978 20.5924 6.29618 20.0491 6.02457C19.4653 5.73265 18.7552 5.95902 18.448 6.53498L15 13M16 6.5C16 8.70914 14.2091 10.5 12 10.5C9.79087 10.5 8.00001 8.70914 8.00001 6.5C8.00001 4.29086 9.79087 2.5 12 2.5C14.2091 2.5 16 4.29086 16 6.5Z"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-width="1.4"
                ></path>
              </g>
            </svg>
            <p v-if="userStore.connected" id="user-name">{{ userStore.current.loginClient }}</p>
          </div>
        </router-link>
        <router-link v-else to="/client">
          <div id="login-user">
            <svg v-if="userStore.connected"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="0.096"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6.00001 21V15.3426C6.00001 15.1158 5.96145 14.8908 5.88599 14.6769L3.35382 7.50248C3.15169 6.92978 3.40765 6.29618 3.95086 6.02457C4.5347 5.73265 5.24482 5.95902 5.552 6.53498L9.00001 13M18 21V15.3426C18 15.1158 18.0386 14.8908 18.114 14.6769L20.6462 7.50248C20.8483 6.92978 20.5924 6.29618 20.0491 6.02457C19.4653 5.73265 18.7552 5.95902 18.448 6.53498L15 13M16 6.5C16 8.70914 14.2091 10.5 12 10.5C9.79087 10.5 8.00001 8.70914 8.00001 6.5C8.00001 4.29086 9.79087 2.5 12 2.5C14.2091 2.5 16 4.29086 16 6.5Z"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-width="1.4"
                ></path>
              </g>
            </svg>
            <p v-if="userStore.connected" id="user-name">{{ userStore.current.loginClient }}</p>
          </div>
        </router-link>
            <div>
              <router-link to="/auth" id="nav-auth" v-if="!userStore.connected">Connexion / S'inscrire</router-link>
              <button id="but-logout" @click="userStore.logout()" v-else>Déconnexion</button>
            </div>
      </div>
      
    </nav>
  </div>
</template>

<style scoped>
#navigation {
  width: 100%;
}

#navigation nav {
  display: flex;
  width: 100%;
}

#nav-container {
  display: flex;
  justify-content: space-between;
  width: calc(100% - 40%);
}

#nav-acc {
  margin-left: 25px;
}

#nav-acc,
#nav-inf,
#nav-vel,
#nav-acs,
#nav-act,
#nav-mar,
#nav-mag {
  color: inherit;
  text-decoration: none;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 3px solid transparent;
  transition: border-bottom-color 0.3s ease-in-out;
}

#nav-acc:hover,
#nav-inf:hover,
#nav-vel:hover,
#nav-acs:hover,
#nav-act:hover,
#nav-mar:hover,
#nav-mag:hover {
  border-bottom-color: black;
}

#nav-connection {
  display: flex;
  margin-left: auto;
}

#nav-auth {
  color: inherit;
  text-decoration: none;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-right: 25px;
}

#but-logout {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 20px 0;
  margin-right: 25px;
}

#login-user {
  display: flex;
}

#user-name {
  padding: 20px 0;
  margin-right: 25px;
}

#login-user svg {
  width: 40px;
}

#top-barre {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

#img-logo {
  display: flex;
  align-items: center;
  margin: 5px;
  margin-left: 25px;
  margin-right: 15px;
}

#img-logo img {
  width: 90px;
}

#input-search {
  height: 33px;
  width: 75%;
  padding-left: 15px;
  padding-right: 15px;
  background-color: rgb(237, 236, 239);
  border-radius: 5px;
}

#input-search:focus-within {
  border: 2px solid rgba(0, 0, 0, 0.5);
}

#input-container {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: space-between;
}

#search {
  height: calc(100% - 4px);
  width: 95%;
  background-color: transparent;
  border: none;
}

#search:focus {
  outline: none;
}

#cancel-search,
#enter-search {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40px;
  background-color: transparent;
  border: none;
}

#aide {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 10px;
}

#svg-info {
  padding-right: 15px;
}

#svg-info {
  cursor: pointer;
  background-color: transparent;
  border: none;
}

#favoris-svg {
  cursor: pointer;
  padding-right: 15px;
}

#panier-svg {
  cursor: pointer;
  padding-right: 25px;
}
</style>
