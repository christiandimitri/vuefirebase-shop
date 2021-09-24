<template>
  <div id="admin">
    <div class="sidebar-page">
      <section class="sidebar-layout">
        <b-sidebar
          position="static"
          :mobile="mobile"
          :expand-on-hover="expandOnHover"
          :reduce="reduce"
          :delay="expandWithDelay ? 500 : null"
          type="is-light"
          v-model="open"
        >
          <div class="p-1">
            <div class="block">
              <img
                src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                alt="Lightweight UI components for Vue.js based on Bulma"
              />
              <div class="close-icon is-clickable" @click="open = false">
                <i class="fas fa-times"></i>
              </div>
            </div>
            <b-menu class="is-custom-mobile">
              <b-menu-list label="Admin">
                <b-menu-item
                  icon="information-outline"
                  label="Dashboard"
                ></b-menu-item>
                <b-menu-item
                  active
                  expanded
                  icon="settings"
                  label="Administrator"
                >
                  <b-menu-item icon="account" label="Users"></b-menu-item>
                  <b-menu-item
                    icon="cellphone-link"
                    label="Devices"
                  ></b-menu-item>
                  <b-menu-item
                    icon="cash-multiple"
                    label="Payments"
                    disabled
                  ></b-menu-item>
                </b-menu-item>
                <b-menu-item icon="account" label="My Account">
                  <b-menu-item
                    icon="account-box"
                    label="Account data"
                  ></b-menu-item>
                  <b-menu-item
                    icon="home-account"
                    label="Addresses"
                  ></b-menu-item>
                </b-menu-item>
              </b-menu-list>
              <b-menu-list>
                <b-menu-item label="Expo" icon="link"></b-menu-item>
              </b-menu-list>
              <b-menu-list label="Actions">
                <b-menu-item icon="logout" label="Logout"></b-menu-item>
              </b-menu-list>
            </b-menu>
          </div>
        </b-sidebar>
        <div id="demo">
          <transition name="slide-fade">
            <button v-if="!open" class="button">
              <span class="icon is-small" @click="open = true">
                <i class="fas fa-list-alt"></i>
              </span>
            </button>
          </transition>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      open: true,
      expandOnHover: false,
      expandWithDelay: false,
      mobile: "reduce",
      reduce: false,
    };
  },
};
</script>

<style lang="scss">

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter {
  transform: translateX(100px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}


.p-1 {
  padding: 1em;
}
.sidebar-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  // min-height: 100vh;
  .sidebar-layout {
    display: flex;
    flex-direction: row;
    min-height: 100%;
    // min-height: 100vh;
  }
}
@media screen and (max-width: 1023px) {
  .b-sidebar {
    .sidebar-content {
      &.is-mini-mobile {
        &:not(.is-mini-expand),
        &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
          .menu-list {
            li {
              a {
                span:nth-child(2) {
                  display: none;
                }
              }
              ul {
                padding-left: 0;
                li {
                  a {
                    display: inline-block;
                  }
                }
              }
            }
          }
          .menu-label:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .b-sidebar {
    .sidebar-content {
      &.is-mini {
        &:not(.is-mini-expand),
        &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
          .menu-list {
            li {
              a {
                span:nth-child(2) {
                  display: none;
                }
              }
              ul {
                padding-left: 0;
                li {
                  a {
                    display: inline-block;
                  }
                }
              }
            }
          }
          .menu-label:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
.is-mini-expand {
  .menu-list a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
