initSidebarItems({"enum":[["AnalysisChoice",""],["BenchmarkError","Possible errors returned from the benchmarking pipeline."],["BenchmarkParameter","An alphabet of possible parameters to use for benchmarking."],["BenchmarkSelector",""]],"fn":[["account","Grab an account, seeded by a name and index."],["show_benchmark_debug_info","show error message and debugging info for the case of an error happening during a benchmark"],["whitelisted_caller","This caller account is automatically whitelisted for DB reads/writes by the benchmarking macro."]],"macro":[["add_benchmark","This macro adds pallet benchmarks to a `Vec<BenchmarkBatch>` object."],["benchmarks","Construct pallet benchmarks for weighing dispatchables."],["benchmarks_instance","Same as [`benchmarks`] but for instantiable module."],["benchmarks_instance_pallet","Same as [`benchmarks`] but for instantiable pallet declared [`frame_support::pallet`]."],["impl_benchmark_test_suite","This creates a test suite which runs the module’s benchmarks."],["list_benchmark","This macro allows users to easily generate a list of benchmarks for the pallets configured in the runtime."],["whitelist","Whitelist the given account."],["whitelist_account",""]],"mod":[["benchmarking","Interface that provides functions for benchmarking the runtime."]],"struct":[["Analysis",""],["BenchmarkBatch","The results of a single of benchmark."],["BenchmarkBatchSplitResults","The results of a single of benchmark, where time and db results are separated."],["BenchmarkConfig","Configuration used to setup and run runtime benchmarks."],["BenchmarkList","A list of benchmarks available for a particular pallet and instance."],["BenchmarkMetadata",""],["BenchmarkResult","Result from running benchmarks on a FRAME pallet. Contains duration of the function call in nanoseconds along with the benchmark parameters used for that benchmark result."],["RegressionModel","A fitted regression model."]],"trait":[["Benchmark","Runtime api for benchmarking a FRAME runtime."],["Benchmarking","The pallet benchmarking trait."],["BenchmarkingSetup","The required setup for creating a benchmark."]]});