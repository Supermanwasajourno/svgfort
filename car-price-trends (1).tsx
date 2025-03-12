import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, ComposedChart } from 'recharts';

const CarPriceTrends = () => {
  // Данные о ценах
  const carPriceData = [
    { date: '1/22', newCarPrice: 1.199, usedCarPrice: 0.522 },
    { date: '2/22', newCarPrice: 1.202, usedCarPrice: 0.522 },
    { date: '3/22', newCarPrice: 1.385, usedCarPrice: 0.593 },
    { date: '4/22', newCarPrice: 1.158, usedCarPrice: 0.553 },
    { date: '5/22', newCarPrice: 1.175, usedCarPrice: 0.512 },
    { date: '6/22', newCarPrice: 1.140, usedCarPrice: 0.501 },
    { date: '7/22', newCarPrice: 1.140, usedCarPrice: 0.502 },
    { date: '8/22', newCarPrice: 1.192, usedCarPrice: 0.528 },
    { date: '9/22', newCarPrice: 1.160, usedCarPrice: 0.542 },
    { date: '10/22', newCarPrice: 1.149, usedCarPrice: 0.553 },
    { date: '11/22', newCarPrice: 1.204, usedCarPrice: 0.598 },
    { date: '12/22', newCarPrice: 1.211, usedCarPrice: 0.641 },
    { date: '1/23', newCarPrice: 1.228, usedCarPrice: 0.658 },
    { date: '2/23', newCarPrice: 1.236, usedCarPrice: 0.703 },
    { date: '3/23', newCarPrice: 1.253, usedCarPrice: 0.731 },
    { date: '4/23', newCarPrice: 1.253, usedCarPrice: 0.743 },
    { date: '5/23', newCarPrice: 1.255, usedCarPrice: 0.753 },
    { date: '6/23', newCarPrice: 1.264, usedCarPrice: 0.748 },
    { date: '7/23', newCarPrice: 1.258, usedCarPrice: 0.771 },
    { date: '8/23', newCarPrice: 1.269, usedCarPrice: 0.776 },
    { date: '9/23', newCarPrice: 1.274, usedCarPrice: 0.789 },
    { date: '10/23', newCarPrice: 1.280, usedCarPrice: 0.792 },
    { date: '11/23', newCarPrice: 1.289, usedCarPrice: 0.797 },
    { date: '12/23', newCarPrice: 1.287, usedCarPrice: 0.803 },
    { date: '1/24', newCarPrice: 1.286, usedCarPrice: 0.796 },
    { date: '2/24', newCarPrice: 1.289, usedCarPrice: 0.794 },
    { date: '3/24', newCarPrice: 1.290, usedCarPrice: 0.795 },
    { date: '4/24', newCarPrice: 1.289, usedCarPrice: 0.751 },
    { date: '5/24', newCarPrice: 1.278, usedCarPrice: 0.707 },
    { date: '6/24', newCarPrice: 1.259, usedCarPrice: 0.704 },
    { date: '7/24', newCarPrice: 1.235, usedCarPrice: 0.737 },
    { date: '8/24', newCarPrice: 1.201, usedCarPrice: 0.686 },
    { date: '9/24', newCarPrice: 1.213, usedCarPrice: 0.697 },
    { date: '10/24', newCarPrice: 1.210, usedCarPrice: 0.710 },
    { date: '11/24', newCarPrice: 1.226, usedCarPrice: 0.726 },
    { date: '12/24', newCarPrice: 1.240, usedCarPrice: 0.732 },
    { date: '1/25', newCarPrice: 1.235, usedCarPrice: 0.723 }
  ];

  // Данные по годам (среднегодовые цены)
  const yearlyData = [
    { year: '2022', newCarPrice: 1.193, usedCarPrice: 0.547, ratio: 2.19 },
    { year: '2023', newCarPrice: 1.262, usedCarPrice: 0.755, ratio: 1.68 },
    { year: '2024', newCarPrice: 1.251, usedCarPrice: 0.736, ratio: 1.70 }
  ];

  // Расчет соотношения цен
  const priceRatioData = carPriceData.map(item => ({
    date: item.date,
    ratio: +(item.newCarPrice / item.usedCarPrice).toFixed(2)
  }));

  // Данные волатильности
  const volatilityData = [
    { type: 'Новые авто', volatility: 1.91 },
    { type: 'Подержанные авто', volatility: 3.11 }
  ];

  // Создаем данные для графика сезонности
  const seasonalData = [
    { month: '1', newCarPrice: 1.237, usedCarPrice: 0.675 },
    { month: '2', newCarPrice: 1.242, usedCarPrice: 0.673 },
    { month: '3', newCarPrice: 1.309, usedCarPrice: 0.706 },
    { month: '4', newCarPrice: 1.233, usedCarPrice: 0.682 },
    { month: '5', newCarPrice: 1.236, usedCarPrice: 0.657 },
    { month: '6', newCarPrice: 1.221, usedCarPrice: 0.651 },
    { month: '7', newCarPrice: 1.211, usedCarPrice: 0.670 },
    { month: '8', newCarPrice: 1.221, usedCarPrice: 0.663 },
    { month: '9', newCarPrice: 1.216, usedCarPrice: 0.676 },
    { month: '10', newCarPrice: 1.213, usedCarPrice: 0.685 },
    { month: '11', newCarPrice: 1.240, usedCarPrice: 0.707 },
    { month: '12', newCarPrice: 1.246, usedCarPrice: 0.725 }
  ];

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Анализ цен на автомобили в Кыргызстане (2022-2025)</h1>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Динамика цен на новые и подержанные автомобили</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={carPriceData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip formatter={(value) => [value.toFixed(3) + " млн сом"]} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="newCarPrice" 
                name="Новые автомобили" 
                stroke="#3b82f6" 
                activeDot={{ r: 8 }} 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="usedCarPrice" 
                name="Подержанные автомобили" 
                stroke="#ef4444" 
                activeDot={{ r: 8 }} 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Среднегодовые цены по годам</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={yearlyData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip formatter={(value) => [value.toFixed(3) + " млн сом"]} />
              <Legend />
              <Bar dataKey="newCarPrice" name="Новые автомобили" fill="#3b82f6" />
              <Bar dataKey="usedCarPrice" name="Подержанные автомобили" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Соотношение цен новых к подержанным автомобилям</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={priceRatioData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[1.5, 2.4]} tickCount={10} />
              <Tooltip formatter={(value) => [value + " раз"]} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="ratio" 
                name="Коэффициент (новые/подержанные)" 
                stroke="#8b5cf6" 
                activeDot={{ r: 8 }} 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Сезонные тренды (средние цены по месяцам)</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={seasonalData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" label={{ value: 'Месяц', position: 'insideBottomRight', offset: -10 }} />
              <YAxis />
              <Tooltip formatter={(value) => [value.toFixed(3) + " млн сом"]} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="newCarPrice" 
                name="Новые автомобили" 
                stroke="#3b82f6" 
                activeDot={{ r: 8 }} 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="usedCarPrice" 
                name="Подержанные автомобили" 
                stroke="#ef4444" 
                activeDot={{ r: 8 }} 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Волатильность цен (среднее месячное изменение, %)</h2>
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={volatilityData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip formatter={(value) => [value + "%"]} />
              <Legend />
              <Bar dataKey="volatility" name="Волатильность (%)" fill="#84cc16" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CarPriceTrends;
