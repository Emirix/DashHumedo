<LineChart
                data={data2}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
               

                  plugins: {
                    legend: {
                      display: false,
                    
                        
                    },
                  },scales: {
                    x: {ticks: {
                        color: "white",
                        beginAtZero: true
                    },
                      grid: {
                        display: false,
                      },
                    },
                    y: {ticks: {
                        color: "white",
                        beginAtZero: true
                    },
                        grid: {
                          display: false,
                        },
                      },
                  },
                }}
              />