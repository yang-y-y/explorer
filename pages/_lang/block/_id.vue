<template>
  <div class="blockPage">
    <Headmobile />
    <Headsearch crumbs="block" v-on:handleNodata="isNaNdata" />
    <mynavs page_index="3" />
    <Nodata v-if="nodata" v-on:reload="isNaNdata" />
    <div class="main" v-else>
      <Spin size="large" fix v-if="loading"></Spin>
      <div class="title-con">
        <div class="container">
          <div class="title-global">
            <h2>{{ $t("block.title") }}</h2>
          </div>
        </div>
      </div>
      <div class="blockDetail">
        <div class="container">
          <div class="detail">
            <h4>{{ $route.params.id }}</h4>
            <div class="hash">
              <p>{{ data.hash }}</p>
            </div>
            <div class="infos">
              <ul>
                <li>
                  <div class="types">{{ $t("time") }}</div>
                  <div class="vals"><Time :time="data.stamp||0" /></div>
                </li>
                <li>
                  <div class="types">{{ $t("size") }}</div>
                  <div class="vals">{{ data.size }}</div>
                </li>
                <li>
                  <div class="types">{{ $t("block.TransactionFee") }}</div>
                  <div class="vals">{{ data.fee }}</div>
                </li>
                <li>
                  <div class="types">{{ $t("block.mount") }}</div>
                  <div class="vals">{{ data.tx_cnt }}</div>
                </li>
                <li>
                  <div class="types">{{ $t("block.GasUsed") }}</div>
                  <div class="vals">{{ data.gas_limit }}</div>
                </li>
                <li>
                  <div class="types">{{ $t("block.MiningDifficulty") }}</div>
                  <div class="vals">{{ data.difficulty|numInit}}</div>
                </li>
                <li>
                  <div class="types">{{ $t("block.TotalDifficulty") }}</div>
                  <div class="vals">{{ data.difficulty_total|numInit}}</div>
                </li>
                <li>
                  <div class="types">{{ $t("block.BlockReward") }}</div>
                  <div class="vals">{{ data.reward }}</div>
                </li>
                <li>
                  <div class="types">
                    {{ $t("block.UncleInclusionRewards") }}
                  </div>
                  <div class="vals">{{ data.reward_uncles }}</div>
                </li>
                <li>
                  <div class="types">{{ $t("block.Confirmations") }}</div>
                  <div class="vals">0</div>
                </li>
                <li>
                  <div class="types">{{ $t("block.PreviousBlock") }}</div>
                  <div class="vals">
                    <nuxt-link
                      :to="
                        '/' +
                        this.$route.params.lang +
                        '/block/' +
                        Number(data.id - 1)
                      "
                      >{{ data.parent_hash }}</nuxt-link
                    >
                  </div>
                </li>
                <li>
                  <div class="types">{{ $t("block.NextBlock") }}</div>
                  <div class="vals">
                    <nuxt-link
                      :to="
                        '/' +
                        this.$route.params.lang +
                        '/block/' +
                        Number(data.id + 1)
                      "
                      >{{ data.next_hash }}</nuxt-link
                    >
                  </div>
                </li>
                <li>
                  <div class="types">{{ $t("block.Sha3Uncles") }}</div>
                  <div class="vals">{{ data.sha_3_uncles }}</div>
                </li>
                <li>
                  <div class="types">{{ $t("block.ExtraData") }}</div>
                  <div class="vals">{{ data.extra }}</div>
                </li>
                <li>
                  <div class="types">{{ $t("block.winner") }}</div>
                  <div class="vals">
                    <nuxt-link
                      :to="
                        '/' +
                        this.$route.params.lang +
                        '/address/' +
                        data.miner
                      "
                      >{{ data.miner }}</nuxt-link
                    >
                  </div>
                </li>
                <li>
                  <div class="types">Nonce</div>
                  <div class="vals">{{ data.nonce }}</div>
                </li>
              </ul>
            </div>
          </div>

          <div class="tabCon">
            <Tabs type="card" :animated="false">
              <TabPane :label="$t('block.Transactions') + '(' + total_01 + ')'">
                <find-Transaction
                  :block_id="block_id"
                  v-on:childtotal_01="childtotal_01"
                />
              </TabPane>
              <TabPane
                :label="'代币交易(' + data.txn_token + ')'"
              >
                <find-Token 
                :block_id="block_id" 
                v-on:childtotal_01="childtotal_01"
                />
              </TabPane>
              <TabPane
                :label="'合约调用转帐(' + data.txn_contract + ')'"
                v-on:childtotal_03="childtotal_03"
              >
              <find-contract :block_id="block_id" 
                            v-on:childtotal_03="childtotal_03"
                            />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import findTransaction from "~/pages/_lang/commen/findTransaction.vue";
import findToken from "~/pages/_lang/commen/findToken.vue";
import findContract from "~/pages/_lang/commen/findContract.vue";

export default {
  data() {
    return {
      data: [],
      loading: true,
      nodata: false,
      load1:true,
      load2:false,
      load3:false,
      block_id: 0,
      total_01: 0,
      total_02: 0,
      total_03: 0,
    };
  },
  created() {
    this.getDetail(this.$route.params.id);

  },
  components: {
    findTransaction,
    findToken,
    findContract
  },
  methods: {
    getDetail(id) {
      this.$axios.get("/" + this.$store.state.explorer + "/block/find?id=" + id)
        .then(({data})  => {
          if (data.code != "-1") {
            this.data = data.data;
            this.block_id = data.data.id;
          } else {
            this.nodata = true;
            let _this = this;
            setTimeout(function () {
              _this.$router.push(
                "/" + _this.$route.params.lang +"/block/"
              );
            }, 2000);
          }
          this.loading = false;

        });
    },
    childtotal_01: function (childtotal_01) {
      this.total_01 = childtotal_01;
    },
    childtotal_02: function (childtotal_02) {
      this.total_02 = childtotal_02;
    },
    childtotal_03: function (childtotal_03) {
      this.total_03 = childtotal_03;
    },
    isNaNdata: function (bool) {
      this.nodata = bool;
    },
  },
  mounted() {
    // this.getDetail(this.$route.params.id);
  },
};
</script>