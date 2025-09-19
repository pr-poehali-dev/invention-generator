import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Innovation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-tech-navy to-tech-blue text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-tech-cyan/10 to-tech-accent/10"></div>
        
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-tech-cyan/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-tech-accent/20 rounded-full animate-float blur-xl" style={{animationDelay: '1.5s'}}></div>
        
        <div className="container mx-auto text-center z-10">
          <div className="animate-fade-in">
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-tech-cyan to-tech-white bg-clip-text text-transparent">
              NEXUS-7
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-tech-cyan font-light">
              Квантовый процессор будущего
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Революционная технология квантовых вычислений, способная увеличить 
              производительность в 10,000 раз при энергопотреблении обычного смартфона
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-tech-cyan hover:bg-tech-cyan/80 text-tech-navy font-semibold text-lg px-8 py-4 animate-glow"
              >
                Инвестировать сейчас
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-navy font-semibold text-lg px-8 py-4"
              >
                Скачать презентацию
                <Icon name="Download" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
          
          {/* Invention visualization */}
          <div className="relative animate-fade-in" style={{animationDelay: '0.5s'}}>
            <img 
              src="/img/ff5be205-78b6-4b5e-9656-86f69ceba06a.jpg" 
              alt="NEXUS-7 Quantum Processor"
              className="mx-auto max-w-md md:max-w-lg rounded-2xl shadow-2xl animate-float"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-tech-cyan/30 to-tech-accent/30 rounded-2xl blur-xl animate-glow"></div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 text-tech-cyan">
            Технологические преимущества
          </h2>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto text-lg">
            Уникальные решения, защищенные 12 международными патентами
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-tech-navy/80 border-tech-cyan/30 p-8 backdrop-blur-sm animate-fade-in hover:scale-105 transition-transform duration-300">
              <div className="text-tech-cyan mb-6">
                <Icon name="Zap" size={48} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-white">
                Квантовое ускорение
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Параллельная обработка данных на квантовом уровне обеспечивает 
                экспоненциальный прирост производительности для сложных вычислений
              </p>
            </Card>
            
            <Card className="bg-tech-navy/80 border-tech-cyan/30 p-8 backdrop-blur-sm animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
              <div className="text-tech-accent mb-6">
                <Icon name="Shield" size={48} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-white">
                Квантовая криптография
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Встроенная система квантового шифрования обеспечивает 
                абсолютную безопасность данных на физическом уровне
              </p>
            </Card>
            
            <Card className="bg-tech-navy/80 border-tech-cyan/30 p-8 backdrop-blur-sm animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.4s'}}>
              <div className="text-tech-cyan mb-6">
                <Icon name="Cpu" size={48} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-white">
                Нейро-интеграция
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Адаптивный алгоритм машинного обучения оптимизирует 
                производительность под конкретные задачи в реальном времени
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-tech-blue/50 to-tech-navy/50">
        <div className="container mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-tech-cyan">
            Интеллектуальная собственность
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 animate-fade-in">
                <div className="bg-tech-cyan/20 p-3 rounded-lg">
                  <Icon name="FileText" size={24} className="text-tech-cyan" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 text-white">
                    Патент US11,234,567
                  </h3>
                  <p className="text-gray-300">
                    "Метод стабилизации квантовых состояний при комнатной температуре"
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="bg-tech-accent/20 p-3 rounded-lg">
                  <Icon name="FileText" size={24} className="text-tech-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 text-white">
                    Патент EP3,456,789
                  </h3>
                  <p className="text-gray-300">
                    "Архитектура гибридного квантово-классического процессора"
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="bg-tech-cyan/20 p-3 rounded-lg">
                  <Icon name="FileText" size={24} className="text-tech-cyan" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 text-white">
                    Патент CN987,654,321
                  </h3>
                  <p className="text-gray-300">
                    "Система коррекции квантовых ошибок нового поколения"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-tech-navy/60 p-8 rounded-2xl border border-tech-cyan/30 backdrop-blur-sm animate-fade-in" style={{animationDelay: '0.6s'}}>
              <h3 className="font-display text-2xl font-bold mb-6 text-tech-cyan">
                Портфель IP
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Действующие патенты:</span>
                  <span className="font-bold text-white">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Заявки на рассмотрении:</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Торговые марки:</span>
                  <span className="font-bold text-white">5</span>
                </div>
                <div className="flex justify-between items-center border-t border-tech-cyan/30 pt-4">
                  <span className="text-gray-300">Оценочная стоимость IP:</span>
                  <span className="font-bold text-tech-cyan text-xl">$250M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
            Будущее начинается сегодня
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Присоединитесь к революции квантовых вычислений. 
            Первые 10 инвесторов получают эксклюзивные условия и доступ к закрытой бета-версии.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-tech-accent hover:bg-tech-accent/80 text-white font-semibold text-xl px-12 py-6 animate-glow"
            >
              Стать инвестором
              <Icon name="Rocket" className="ml-2" size={24} />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-navy font-semibold text-xl px-12 py-6"
            >
              Связаться с нами
              <Icon name="Mail" className="ml-2" size={24} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}