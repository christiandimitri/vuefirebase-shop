<template>
  <div id="admin" style="height: 100vh">
    <div class="sidebar-page" style="height: 100%">
      <section class="sidebar-layout">
        <b-sidebar
          :fullheight="fullheight"
          position="static"
          :mobile="mobile"
          :expand-on-hover="expandOnHover"
          :reduce="reduce"
          :delay="expandWithDelay ? 500 : null"
          type="is-dark"
          v-model="open"
        >
          <div class="p-1">
            <div class="columns pt-3">
              <div class="column">
                <p class="subtitle is-6 has-text-grey pl-3 is-uppercase">
                  Vue Shop
                </p>
              </div>
              <div class="column">
                <span
                  class="
                    close-icon
                    is-clickable is-pulled-right
                    pr-3
                    has-text-grey
                  "
                  @click="open = false"
                >
                  <i class="fas fa-times"></i>
                </span>
              </div>
            </div>

            <hr class="mx-2 mt-0" style="background-color: #7a7a7a" />

            <div class="admin-img is-flex is-justify-content-center">
              <figure class="image is-80x80">
                <img
                  class="is-rounded"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </figure>
            </div>
            <div class="is-flex is-justify-content-center pt-5">
              <p class="subtitle is-6 pr-1 has-text-success">●</p>
              <p class="subtitle is-6 has-text-grey">Christian Dimitri</p>
            </div>

            <hr class="mx-2 mt-0" style="background-color: #7a7a7a" />
            <b-field class="px-2" message="What do you want to search?">
              <b-input placeholder="Search..." type="search" icon="search">
              </b-input>
              <p class="control">
                <b-button type="is-dark" icon-left="search" />
              </p>
            </b-field>

            <hr class="mx-2 mt-0" style="background-color: #7a7a7a" />

            <b-menu class="is-custom-mobile">
              <b-menu-list label="Menu">
                <b-menu-item icon="chart-line" label="Overview"></b-menu-item>
                <b-menu-item label="Products" icon="boxes"></b-menu-item>
                <b-menu-item label="Orders" icon="shopping-cart"></b-menu-item>
                <b-menu-item icon="power-off" label="Logout"></b-menu-item>
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
        <div class="container">
        <p class="title pt-6">Sidebar template</p>
        <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
      fullheight: true,
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
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
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
.menu-list a.is-active {
  color: dimgrey !important;
  background-color: whitesmoke;
}
.menu-list a.icon-text {
  color: #7a7a7a;
}
</style>
