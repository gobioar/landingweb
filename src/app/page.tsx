"use client"

import { Building2, ShoppingCart, ArrowRight, Package, Users, Container, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      {/* Hero Section */}
      <main className="flex-1 px-4 pt-4 pb-12 sm:pt-6 sm:pb-20">
        <div className="max-w-6xl w-full mx-auto">
          {/* New Hero with Logo */}
          <div className="text-center mb-10 sm:mb-16">
            {/* Logo */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32">
                <Image 
                  src="/logo1.png" 
                  alt="Gobio Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            
            {/* Hero Text - Silicon Valley Style */}
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                ¿Listo para marcar{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  la diferencia?
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
                Descubrí nuestra gama de soluciones sostenibles.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Container className="w-4 h-4" />
                  Ecorígidos
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                  <ShoppingBag className="w-4 h-4" />
                  Ecoflexibles
                </div>
              </div>
            </div>
          </div>

          {/* Two Options Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {/* B2B Option */}
            <Card className="relative overflow-hidden border-2 hover:border-primary transition-all hover:shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
              <CardHeader className="space-y-4 pb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl">Soluciones B2B</CardTitle>
                <CardDescription className="text-base">
                  Para empresas y compradores mayoristas.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Compras en grandes volúmenes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Precios especiales para empresas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Atención personalizada y soporte dedicado.</span>
                  </li>
                </ul>
                
                {/* Image Placeholder for B2B */}
                <div className="relative w-full h-48 rounded-lg overflow-hidden bg-muted/30 border border-border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-muted-foreground/30" />
                  </div>
                  {
                  <Image 
                    src="/foto.jpg" 
                    alt="Soluciones B2B" 
                    fill
                    className="object-cover"
                  />
                  }
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full text-base h-12 gap-2"
                  onClick={() => window.location.href = 'https://gobio.ar'}
                >
                  Ir a Soluciones Empresariales
                  <ArrowRight className="w-5 h-5" />
                </Button>
                
                <p className="text-xs text-center text-muted-foreground pt-2">
                  ¿Eres una empresa o necesitas comprar al por mayor?
                </p>
              </CardContent>
            </Card>

            {/* B2C Option */}
            <Card className="relative overflow-hidden border-2 hover:border-primary transition-all hover:shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
              <CardHeader className="space-y-4 pb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShoppingCart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl">Tienda Online</CardTitle>
                <CardDescription className="text-base">
                  Para clientes individuales.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Compras unitarias o pequeñas cantidades.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShoppingCart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Envío directo a tu domicilio.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Catálogo completo de productos.</span>
                  </li>
                </ul>
                
                {/* Image Placeholder for B2C */}
                <div className="relative w-full h-48 rounded-lg overflow-hidden bg-muted/30 border border-border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShoppingCart className="w-16 h-16 text-muted-foreground/30" />
                  </div>
                  {
                  <Image 
                    src="/foto1.jpg" 
                    alt="Tienda Online" 
                    fill
                    className="object-cover"
                  />
                  }
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full text-base h-12 gap-2"
                  onClick={() => window.location.href = 'https://tienda.gobio.ar'}
                >
                  Ir a Tienda Online
                  <ArrowRight className="w-5 h-5" />
                </Button>
                
                <p className="text-xs text-center text-muted-foreground pt-2">
                  ¿Eres un cliente individual o particular?
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Help Text */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              ¿No estás seguro cuál elegir? Contacta con nuestro equipo para ayudarte.
            </p>
          </div>
        </div>
      </main>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5491150073269"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Footer */}
      {/* Footer */}
{/* Footer */}
<footer className="border-t py-8 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center justify-center gap-10 flex-wrap text-center sm:text-left">
      {/* Logo (2x más grande) */}
      <div className="relative w-24 h-24 flex-shrink-0">
        <Image 
          src="/logo1.png" 
          alt="GoBio Logo" 
          fill
          className="object-contain"
        />
      </div>

      {/* Email */}
      <a 
        href="mailto:hola@gobio.ar" 
        className="text-base text-primary hover:underline font-medium"
      >
        hola@gobio.ar
      </a>

      {/* Copyright */}
      <p className="text-base text-muted-foreground">
        © {new Date().getFullYear()} GoBio. Todos los derechos reservados.
      </p>
    </div>
  </div>
</footer>


    </div>
  )
}
