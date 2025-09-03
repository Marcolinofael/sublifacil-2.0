import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Zap, Users, BarChart3, Palette, Package, ArrowRight, Star } from 'lucide-react'
import { motion } from 'framer-motion'
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
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
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
  <Card className="h-full">
    <CardContent className="pt-6">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 mb-4">"{content}"</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </CardContent>
  </Card>
)

function App() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Gestão Simplificada",
      description: "Interface intuitiva que facilita o gerenciamento completo do seu negócio de sublimação, desde pedidos até entrega."
    },
    {
      icon: <Package className="w-6 h-6 text-blue-600" />,
      title: "Controle de Estoque",
      description: "Monitore seus materiais, produtos e insumos em tempo real com alertas automáticos de reposição."
    },
    {
      icon: <Palette className="w-6 h-6 text-blue-600" />,
      title: "Designer Integrado",
      description: "Crie e edite designs diretamente no sistema com ferramentas profissionais e pré-visualização em tempo real."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      title: "Relatórios Inteligentes",
      description: "Acompanhe o desempenho do seu negócio com dashboards e relatórios detalhados e personalizáveis."
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
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Sublifácil</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#recursos" className="text-gray-600 hover:text-blue-600 transition-colors">Recursos</a>
              <a href="#como-funciona" className="text-gray-600 hover:text-blue-600 transition-colors">Como Funciona</a>
              <a href="#depoimentos" className="text-gray-600 hover:text-blue-600 transition-colors">Depoimentos</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
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
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                🚀 Sistema Completo para Sublimação
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Transforme seu negócio de
                <span className="text-blue-600"> sublimação</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                O Sublifácil é a solução completa para gerenciar seu negócio de sublimação. 
                Desde o controle de estoque até a criação de designs, tudo em uma plataforma intuitiva e poderosa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  Experimente Grátis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                  Ver Demonstração
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recursos que fazem a diferença
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
      <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veja o Sublifácil em ação
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Interface moderna e intuitiva que facilita todas as etapas do seu processo produtivo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <img 
                src={interfaceImage1} 
                alt="Interface de Gerenciamento de Pedidos" 
                className="rounded-lg shadow-lg mb-6 w-full"
              />
              <h3 className="text-xl font-semibold mb-2">Gerenciamento de Pedidos</h3>
              <p className="text-gray-600">
                Controle completo dos seus pedidos com status em tempo real e organização intuitiva
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <img 
                src={interfaceImage2} 
                alt="Dashboard de Controle de Estoque" 
                className="rounded-lg shadow-lg mb-6 w-full"
              />
              <h3 className="text-xl font-semibold mb-2">Controle de Estoque</h3>
              <p className="text-gray-600">
                Dashboard inteligente com alertas automáticos e visualização clara dos seus materiais
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <img 
                src={interfaceImage3} 
                alt="Editor de Designs Integrado" 
                className="rounded-lg shadow-lg mb-6 w-full"
              />
              <h3 className="text-xl font-semibold mb-2">Editor de Designs</h3>
              <p className="text-gray-600">
                Crie e edite designs profissionais com pré-visualização em tempo real
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Histórias reais de empreendedores que transformaram seus negócios com o Sublifácil
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
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para revolucionar seu negócio?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Junte-se a centenas de empreendedores que já transformaram seus negócios com o Sublifácil
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Começar Teste Grátis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                Falar com Especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Sublifácil</h3>
              </div>
              <p className="text-gray-400">
                A solução completa para seu negócio de sublimação.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demonstração</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Treinamentos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sublifácil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

