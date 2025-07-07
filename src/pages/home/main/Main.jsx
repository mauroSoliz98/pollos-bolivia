import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { RiUser3Line, RiShoppingCart2Line, RiMoneyDollarCircleLine, RiPulseLine, RiEyeLine, RiFocus2Line, RiAwardLine } from 'react-icons/ri';

const Main = () => {
  // Simulamos el estado del tema - puedes conectar esto con tu sistema de temas existente

  // Datos de ejemplo para los gráficos
  const salesData = [
    { month: 'Ene', ventas: 4000, ingresos: 2400 },
    { month: 'Feb', ventas: 3000, ingresos: 1398 },
    { month: 'Mar', ventas: 2000, ingresos: 9800 },
    { month: 'Abr', ventas: 2780, ingresos: 3908 },
    { month: 'May', ventas: 1890, ingresos: 4800 },
    { month: 'Jun', ventas: 2390, ingresos: 3800 },
  ];

  const pieData = [
    { name: 'Productos', value: 35, color: '#3b82f6' },
    { name: 'Servicios', value: 25, color: '#10b981' },
    { name: 'Suscripciones', value: 20, color: '#f59e0b' },
    { name: 'Otros', value: 20, color: '#ef4444' },
  ];

  const trafficData = [
    { day: 'Lun', visitas: 120 },
    { day: 'Mar', visitas: 150 },
    { day: 'Mie', visitas: 180 },
    { day: 'Jue', visitas: 140 },
    { day: 'Vie', visitas: 200 },
    { day: 'Sab', visitas: 160 },
    { day: 'Dom', visitas: 110 },
  ];

  const stats = [
    { title: 'Ventas Totales', value: '$45,231', icon: RiMoneyDollarCircleLine, change: '+12.5%', positive: true },
    { title: 'Usuarios Activos', value: '2,845', icon: RiUser3Line, change: '+8.2%', positive: true },
    { title: 'Pedidos', value: '1,247', icon: RiShoppingCart2Line, change: '-2.4%', positive: false },
    { title: 'Tasa de Conversión', value: '3.24%', icon: RiFocus2Line, change: '+0.8%', positive: true },
  ];

  return (
    <div className="min-h-screen transition-all duration-300 bg-stone-100 text-gray-900 dark:bg-neutral-700 dark:text-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Panel de Control</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Resumen de tu negocio en tiempo real
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="p-6 rounded-xl border shadow-sm bg-white border-gray-200 dark:bg-neutral-800 dark:border-neutral-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${stat.positive
                    ? 'text-green-500'
                    : 'text-red-500'
                  }`}>
                  {stat.change}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-gray-100 dark:bg-neutral-700">
                <stat.icon className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Gráfico de Barras */}
        <div className="p-6 rounded-xl border shadow-sm bg-white border-gray-200 dark:bg-neutral-800 dark:border-neutral-600">
          <h3 className="text-lg font-semibold mb-4">Ventas Mensuales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="month"
                tick={{ fill: '#374151' }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <YAxis
                tick={{ fill: '#374151' }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  color: '#000000'
                }}
              />
              <Bar dataKey="ventas" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="ingresos" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de Torta */}
        <div className="p-6 rounded-xl border shadow-sm bg-white border-gray-200 dark:bg-neutral-800 dark:border-neutral-600">
          <h3 className="text-lg font-semibold mb-4">Distribución de Ingresos</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  color: '#000000'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gráfico de Líneas */}
        <div className="lg:col-span-2 p-6 rounded-xl border shadow-sm bg-white border-gray-200 dark:bg-neutral-800 dark:border-neutral-600">
          <h3 className="text-lg font-semibold mb-4">Tráfico Semanal</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="day"
                tick={{ fill: '#374151' }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <YAxis
                tick={{ fill: '#374151' }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  color: '#000000'
                }}
              />
              <Line
                type="monotone"
                dataKey="visitas"
                stroke="#f59e0b"
                strokeWidth={3}
                dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Lista de Actividades */}
        <div className="p-6 rounded-xl border shadow-sm bg-white border-gray-200 dark:bg-neutral-800 dark:border-neutral-600">
          <h3 className="text-lg font-semibold mb-4">Actividad Reciente</h3>
          <div className="space-y-4">
            {[
              { icon: RiUser3Line, text: 'Nuevo usuario registrado', time: '2 min' },
              { icon: RiShoppingCart2Line, text: 'Pedido completado', time: '5 min' },
              { icon: RiAwardLine, text: 'Meta alcanzada', time: '15 min' },
              { icon: RiPulseLine, text: 'Servidor optimizado', time: '1 h' },
              { icon: RiEyeLine, text: 'Reporte generado', time: '2 h' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-neutral-700">
                  <activity.icon className="w-4 h-4 text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.text}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    hace {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;