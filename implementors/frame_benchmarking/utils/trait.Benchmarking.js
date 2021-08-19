(function() {var implementors = {};
implementors["frame_system_benchmarking"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"frame_system_benchmarking/trait.Config.html\" title=\"trait frame_system_benchmarking::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"frame_system_benchmarking/struct.Pallet.html\" title=\"struct frame_system_benchmarking::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["frame_system_benchmarking::Pallet"]}];
implementors["pallet_assets"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_assets/pallet/trait.Config.html\" title=\"trait pallet_assets::pallet::Config\">Config</a>&lt;I&gt;, I:&nbsp;'static&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_assets/pallet/struct.Pallet.html\" title=\"struct pallet_assets::pallet::Pallet\">Pallet</a>&lt;T, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_assets::pallet::Pallet"]}];
implementors["pallet_babe"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_babe/pallet/trait.Config.html\" title=\"trait pallet_babe::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_babe/pallet/struct.Pallet.html\" title=\"struct pallet_babe::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_babe::pallet::Pallet"]}];
implementors["pallet_balances"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_balances/pallet/trait.Config.html\" title=\"trait pallet_balances::pallet::Config\">Config</a>&lt;I&gt;, I:&nbsp;'static&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_balances/pallet/struct.Pallet.html\" title=\"struct pallet_balances::pallet::Pallet\">Pallet</a>&lt;T, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_balances::pallet::Pallet"]}];
implementors["pallet_bounties"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_bounties/trait.Config.html\" title=\"trait pallet_bounties::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"type\" href=\"pallet_bounties/type.Pallet.html\" title=\"type pallet_bounties::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_bounties::Pallet"]}];
implementors["pallet_collective"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_collective/trait.Config.html\" title=\"trait pallet_collective::Config\">Config</a>&lt;I&gt;, I:&nbsp;<a class=\"trait\" href=\"frame_support/traits/storage/trait.Instance.html\" title=\"trait frame_support::traits::storage::Instance\">Instance</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"type\" href=\"pallet_collective/type.Pallet.html\" title=\"type pallet_collective::Pallet\">Pallet</a>&lt;T, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_collective::Pallet"]}];
implementors["pallet_contracts"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_contracts/pallet/trait.Config.html\" title=\"trait pallet_contracts::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_contracts/pallet/struct.Pallet.html\" title=\"struct pallet_contracts::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_contracts/chain_extension/trait.SysConfig.html\" title=\"trait pallet_contracts::chain_extension::SysConfig\">Config</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"pallet_contracts/chain_extension/trait.SysConfig.html#associatedtype.AccountId\" title=\"type pallet_contracts::chain_extension::SysConfig::AccountId\">AccountId</a>: <a class=\"trait\" href=\"pallet_contracts/chain_extension/trait.UncheckedFrom.html\" title=\"trait pallet_contracts::chain_extension::UncheckedFrom\">UncheckedFrom</a>&lt;T::<a class=\"type\" href=\"pallet_contracts/chain_extension/trait.SysConfig.html#associatedtype.Hash\" title=\"type pallet_contracts::chain_extension::SysConfig::Hash\">Hash</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"pallet_contracts/chain_extension/trait.SysConfig.html#associatedtype.AccountId\" title=\"type pallet_contracts::chain_extension::SysConfig::AccountId\">AccountId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>","synthetic":false,"types":["pallet_contracts::pallet::Pallet"]}];
implementors["pallet_democracy"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_democracy/pallet/trait.Config.html\" title=\"trait pallet_democracy::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_democracy/pallet/struct.Pallet.html\" title=\"struct pallet_democracy::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_democracy::pallet::Pallet"]}];
implementors["pallet_election_provider_multi_phase"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_election_provider_multi_phase/pallet/trait.Config.html\" title=\"trait pallet_election_provider_multi_phase::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_election_provider_multi_phase/pallet/struct.Pallet.html\" title=\"struct pallet_election_provider_multi_phase::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_election_provider_multi_phase::pallet::Pallet"]}];
implementors["pallet_elections_phragmen"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_elections_phragmen/pallet/trait.Config.html\" title=\"trait pallet_elections_phragmen::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_elections_phragmen/pallet/struct.Pallet.html\" title=\"struct pallet_elections_phragmen::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_elections_phragmen::pallet::Pallet"]}];
implementors["pallet_example"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_example/pallet/trait.Config.html\" title=\"trait pallet_example::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_example/pallet/struct.Pallet.html\" title=\"struct pallet_example::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_example::pallet::Pallet"]}];
implementors["pallet_gilt"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_gilt/pallet/trait.Config.html\" title=\"trait pallet_gilt::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_gilt/pallet/struct.Pallet.html\" title=\"struct pallet_gilt::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_gilt::pallet::Pallet"]}];
implementors["pallet_grandpa"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_grandpa/pallet/trait.Config.html\" title=\"trait pallet_grandpa::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_grandpa/pallet/struct.Pallet.html\" title=\"struct pallet_grandpa::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_grandpa::pallet::Pallet"]}];
implementors["pallet_identity"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_identity/pallet/trait.Config.html\" title=\"trait pallet_identity::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_identity/pallet/struct.Pallet.html\" title=\"struct pallet_identity::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_identity::pallet::Pallet"]}];
implementors["pallet_im_online"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_im_online/pallet/trait.Config.html\" title=\"trait pallet_im_online::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_im_online/pallet/struct.Pallet.html\" title=\"struct pallet_im_online::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_im_online::pallet::Pallet"]}];
implementors["pallet_indices"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_indices/pallet/trait.Config.html\" title=\"trait pallet_indices::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_indices/pallet/struct.Pallet.html\" title=\"struct pallet_indices::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_indices::pallet::Pallet"]}];
implementors["pallet_lottery"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_lottery/pallet/trait.Config.html\" title=\"trait pallet_lottery::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_lottery/pallet/struct.Pallet.html\" title=\"struct pallet_lottery::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_lottery::pallet::Pallet"]}];
implementors["pallet_membership"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_membership/trait.Config.html\" title=\"trait pallet_membership::Config\">Config</a>&lt;I&gt;, I:&nbsp;<a class=\"trait\" href=\"frame_support/traits/storage/trait.Instance.html\" title=\"trait frame_support::traits::storage::Instance\">Instance</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"type\" href=\"pallet_membership/type.Pallet.html\" title=\"type pallet_membership::Pallet\">Pallet</a>&lt;T, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_membership::Pallet"]}];
implementors["pallet_mmr"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_mmr/pallet/trait.Config.html\" title=\"trait pallet_mmr::pallet::Config\">Config</a>&lt;I&gt;, I:&nbsp;'static&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_mmr/pallet/struct.Pallet.html\" title=\"struct pallet_mmr::pallet::Pallet\">Pallet</a>&lt;T, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_mmr::pallet::Pallet"]}];
implementors["pallet_multisig"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_multisig/pallet/trait.Config.html\" title=\"trait pallet_multisig::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_multisig/pallet/struct.Pallet.html\" title=\"struct pallet_multisig::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_multisig::pallet::Pallet"]}];
implementors["pallet_offences_benchmarking"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_offences_benchmarking/trait.Config.html\" title=\"trait pallet_offences_benchmarking::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_offences_benchmarking/struct.Pallet.html\" title=\"struct pallet_offences_benchmarking::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_offences_benchmarking::Pallet"]}];
implementors["pallet_proxy"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_proxy/pallet/trait.Config.html\" title=\"trait pallet_proxy::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_proxy/pallet/struct.Pallet.html\" title=\"struct pallet_proxy::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_proxy::pallet::Pallet"]}];
implementors["pallet_scheduler"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_scheduler/pallet/trait.Config.html\" title=\"trait pallet_scheduler::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_scheduler/pallet/struct.Pallet.html\" title=\"struct pallet_scheduler::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_scheduler::pallet::Pallet"]}];
implementors["pallet_session_benchmarking"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_session_benchmarking/trait.Config.html\" title=\"trait pallet_session_benchmarking::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_session_benchmarking/struct.Pallet.html\" title=\"struct pallet_session_benchmarking::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_session_benchmarking::Pallet"]}];
implementors["pallet_staking"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_staking/pallet/trait.Config.html\" title=\"trait pallet_staking::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_staking/pallet/struct.Pallet.html\" title=\"struct pallet_staking::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_staking::pallet::pallet::Pallet"]}];
implementors["pallet_template"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_template/pallet/trait.Config.html\" title=\"trait pallet_template::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_template/pallet/struct.Pallet.html\" title=\"struct pallet_template::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_template::pallet::Pallet"]}];
implementors["pallet_timestamp"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_timestamp/pallet/trait.Config.html\" title=\"trait pallet_timestamp::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_timestamp/pallet/struct.Pallet.html\" title=\"struct pallet_timestamp::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_timestamp::pallet::Pallet"]}];
implementors["pallet_tips"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_tips/trait.Config.html\" title=\"trait pallet_tips::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"type\" href=\"pallet_tips/type.Pallet.html\" title=\"type pallet_tips::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_tips::Pallet"]}];
implementors["pallet_transaction_storage"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_transaction_storage/pallet/trait.Config.html\" title=\"trait pallet_transaction_storage::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_transaction_storage/pallet/struct.Pallet.html\" title=\"struct pallet_transaction_storage::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_transaction_storage::pallet::Pallet"]}];
implementors["pallet_treasury"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_treasury/pallet/trait.Config.html\" title=\"trait pallet_treasury::pallet::Config\">Config</a>&lt;I&gt;, I:&nbsp;'static&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_treasury/pallet/struct.Pallet.html\" title=\"struct pallet_treasury::pallet::Pallet\">Pallet</a>&lt;T, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_treasury::pallet::Pallet"]}];
implementors["pallet_uniques"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_uniques/pallet/trait.Config.html\" title=\"trait pallet_uniques::pallet::Config\">Config</a>&lt;I&gt;, I:&nbsp;'static&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_uniques/pallet/struct.Pallet.html\" title=\"struct pallet_uniques::pallet::Pallet\">Pallet</a>&lt;T, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_uniques::pallet::Pallet"]}];
implementors["pallet_utility"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_utility/pallet/trait.Config.html\" title=\"trait pallet_utility::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_utility/pallet/struct.Pallet.html\" title=\"struct pallet_utility::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_utility::pallet::Pallet"]}];
implementors["pallet_vesting"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_vesting/pallet/trait.Config.html\" title=\"trait pallet_vesting::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_benchmarking/utils/trait.Benchmarking.html\" title=\"trait frame_benchmarking::utils::Benchmarking\">Benchmarking</a> for <a class=\"struct\" href=\"pallet_vesting/pallet/struct.Pallet.html\" title=\"struct pallet_vesting::pallet::Pallet\">Pallet</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_vesting::pallet::Pallet"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()