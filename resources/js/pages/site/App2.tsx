import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Zap, Users, BarChart3, Palette, Package, ArrowRight, Star, Store } from 'lucide-react'
import { motion } from 'framer-motion'
import { Inertia } from '@inertiajs/inertia';
import '@/../css/App2.css'

// Importando as imagens geradas
const interfaceImage1 = '/img/sublifacil_interface_1.png'
const interfaceImage2 = '/img/sublifacil_interface_2.png'
const interfaceImage3 = '/img/sublifacil_interface_3.png'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05 }}
    className="h-full"
  >
    <Card className="h-full hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
      <CardHeader>
        <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-300">{description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
)

interface TestimonialProps {
  name: string
  role: string
  content: string
  rating: number
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, content, rating }) => (
  <Card className="h-full bg-gray-800 border-gray-700">
    <CardContent className="p-6">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-300 mb-4">"{content}"</p>
      <div>
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </CardContent>
  </Card>
)

function App() {


  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Criação Rápida",
      description: "Desenvolva designs personalizados em minutos com nossas ferramentas avançadas de design."
    },
    {
      icon: <Package className="w-6 h-6 text-blue-600" />,
      title: "Gestão de Estoque",
      description: "Controle completo do seu inventário com alertas automáticos de reposição e relatórios detalhados."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      title: "Relatórios Inteligentes",
      description: "Analise seu desempenho com dashboards intuitivos e métricas que realmente importam."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Gestão de Clientes",
      description: "Mantenha um relacionamento próximo com seus clientes através de um CRM integrado e eficiente."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Controle de Qualidade",
      description: "Garanta a excelência dos seus produtos com checklists e controles de qualidade automatizados."
    },
    {
      icon: <Store className="w-6 h-6 text-blue-600" />,
      title: "Venda Rápida e Direta",
      description: "Facilite o processo de venda com ferramentas que agilizam o atendimento e a finalização de pedidos."
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Proprietária - Sublimações da Maria",
      content: "O Sublifácil revolucionou meu negócio! Agora consigo gerenciar tudo em um só lugar e minha produtividade aumentou 300%.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Empreendedor - JS Personalizados",
      content: "Sistema incrível! A interface é muito fácil de usar e o controle de estoque me ajudou a reduzir desperdícios significativamente.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Designer - Ana Criações",
      content: "O designer integrado é fantástico! Posso criar e aprovar designs com os clientes de forma muito mais rápida.",
      rating: 5
    },
  ]

  return (
    <div className="dark min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Sublifácil</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#recursos" className="text-gray-300 hover:text-blue-400 transition-colors">Recursos</a>
              <a href="#como-funciona" className="text-gray-300 hover:text-blue-400 transition-colors">Como Funciona</a>
              <a href="#depoimentos" className="text-gray-300 hover:text-blue-400 transition-colors">Depoimentos</a>
              <a href="#especialista" className="text-gray-300 hover:text-blue-400 transition-colors">Fale com Especialista</a>
            </nav>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => Inertia.visit('/login')}
            >
              Começar Agora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-blue-900 text-blue-200 hover:bg-blue-800">
                🚀 Sistema Completo para Sublimação
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transforme seu negócio de
                <span className="text-blue-400"> sublimação</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                O Sublifácil é a solução completa para gerenciar seu negócio de sublimação.
                Desde o controle de estoque até a criação de designs, tudo em uma plataforma intuitiva e poderosa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3" onClick={() => Inertia.visit('/login')}>
                  Experimente Grátis
                  <ArrowRight className="ml-2 w-5 h-5" />

                </Button>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded text-lg shadow">
                    Login: <b>admin@admin</b> &nbsp;|&nbsp; Senha: <b>adminsubli</b>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recursos que fazem a diferença
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Descubra como o Sublifácil pode simplificar e potencializar seu negócio de sublimação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Veja o Sublifácil em ação
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Interface moderna e intuitiva que facilita todas as etapas do seu processo produtivo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative mb-8">
                <img
                  src={interfaceImage1}
                  alt="Interface do Sublifácil - Dashboard"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Dashboard Inteligente</h3>
              <p className="text-gray-300">
                Tenha uma visão completa do seu negócio com métricas em tempo real e insights valiosos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="relative mb-8">
                <img
                  src={interfaceImage2}
                  alt="Interface do Sublifácil - Editor de Design"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Editor de Design</h3>
              <p className="text-gray-300">
                Crie designs incríveis com ferramentas profissionais integradas diretamente na plataforma.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="relative mb-8">
                <img
                  src={interfaceImage3}
                  alt="Interface do Sublifácil - Gestão de Pedidos"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Gestão de Pedidos</h3>
              <p className="text-gray-300">
                Organize e acompanhe todos os seus pedidos de forma simples e eficiente.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Descubra como o Sublifácil está transformando negócios de sublimação em todo o país
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Testimonial {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="especialista" className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para revolucionar seu negócio?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de empreendedores que já transformaram seus negócios com o Sublifácil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600"
                onClick={() => window.open('https://wa.me/5524992998042?text=Quero%20Saber%20mais%20sobre%20o%20Sublif%C3%A1cil', '_blank')}
              >
                Falar com Especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center space-x-2 mb-4 justify-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Palette className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Sublifácil</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto text-lg">
              A plataforma completa para transformar e escalar seu negócio de sublimação com tecnologia de ponta.
            </p>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400">
            <p className="text-lg">&copy; 2025 Sublifácil. Todos os direitos reservados. <span className="font-semibold">Developed by Rafael Marcolino</span></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App