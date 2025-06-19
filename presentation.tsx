"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Calendar, Zap, BarChart3, Settings, TrendingUp, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    // Title Slide
    {
      type: "title",
      content: {
        title: "Energy Management Solution",
        subtitle: "Project Implementation Timeline",
        period: "June 23, 2025 - August 22, 2025",
        duration: "9 Weeks Development Cycle",
      },
    },
    // Overview Slide
    {
      type: "overview",
      content: {
        title: "Project Overview",
        totalWeeks: 9,
        startDate: "23-Jun-2025",
        endDate: "22-Aug-2025",
        keyFeatures: [
          "Energy Issues Detection & Analysis",
          "Real-time Equipment Monitoring",
          "Single Line Diagram Implementation",
          "System Management Consolidation",
          "Nectar Intelligence Integration",
        ],
      },
    },
    // Week 1-2
    {
      type: "weekly",
      content: {
        week: "Week 1 & 2",
        date: "4-July-2025",
        title: "Foundation & Core Energy Issues",
        deliverables: [
          {
            category: "Energy Issues Implementation",
            items: [
              "Overcooling detection and analysis",
              "Lack of Modulation monitoring",
              "30-day historical data preparation for Park Island",
              "Equipment count dashboard with issue breakdown",
              "Drill-down functionality to equipment lists",
              "Supporting data trends visualization",
            ],
          },
          {
            category: "Dashboard Widgets",
            items: [
              "Energy Consumption Distribution widget",
              "Equipment Run Hours Distribution widget",
              "Hierarchy and Asset Type filters implementation",
            ],
          },
        ],
      },
    },
    // Week 3
    {
      type: "weekly",
      content: {
        week: "Week 3",
        date: "11-July-2025",
        title: "Advanced Energy Analysis",
        deliverables: [
          {
            category: "Additional Energy Issues",
            items: [
              "Low ΔT Penalty detection",
              "Out of Schedule Operation monitoring",
              "Enhanced issue reporting with root cause analysis",
              "Equipment-specific trend analysis",
            ],
          },
          {
            category: "Analytics Widgets",
            items: [
              "Energy Consumption Ranking dashboard",
              "Energy Consumption by Asset Type analysis",
              "Advanced filtering capabilities",
            ],
          },
        ],
      },
    },
    // Week 4
    {
      type: "weekly",
      content: {
        week: "Week 4",
        date: "18-July-2025",
        title: "Comprehensive Monitoring & SLD",
        deliverables: [
          {
            category: "Extended Energy Issues",
            items: [
              "Short Cycling detection",
              "VFD Speed Monitoring implementation",
              "Enhanced Lack of Modulation analysis",
              "Comprehensive equipment diagnostics",
            ],
          },
          {
            category: "Single Line Diagram",
            items: [
              "Energy consumption visualization",
              "Comparison analytics integration",
              "Energy issue mapping in SLD",
              "Interactive diagram interface",
            ],
          },
        ],
      },
    },
    // Week 5
    {
      type: "weekly",
      content: {
        week: "Week 5",
        date: "25-July-2025",
        title: "Specialized Systems & SLD Enhancement",
        deliverables: [
          {
            category: "Specialized Energy Issues",
            items: [
              "Low Economiser Utilisation monitoring",
              "Low HRW Utilisation analysis",
              "Cooling Coil leaking detection",
              "Advanced diagnostic capabilities",
            ],
          },
          {
            category: "SLD Refinement",
            items: [
              "Enhanced energy issue count integration",
              "Blind spot functionality implementation",
              "Improved user interface and navigation",
            ],
          },
        ],
      },
    },
    // Week 6
    {
      type: "weekly",
      content: {
        week: "Week 6",
        date: "01-Aug-2025",
        title: "Automation & System Management",
        deliverables: [
          {
            category: "Automated Data Processing",
            items: [
              "Daily automated energy issue aggregation",
              "Historical data processing for all periods",
              "Hierarchy and asset type filter integration",
              "Real-time data pipeline implementation",
            ],
          },
          {
            category: "System Management",
            items: [
              "Actions Taken tracking system",
              "Work Orders consolidation framework",
              "User Action Required notifications",
            ],
          },
        ],
      },
    },
    // Week 7
    {
      type: "weekly",
      content: {
        week: "Week 7",
        date: "08-Aug-2025",
        title: "Distribution Analysis & Management Completion",
        deliverables: [
          {
            category: "Energy Issues Distribution",
            items: [
              "Community-level analysis dashboard",
              "Sub-community breakdown visualization",
              "Site-specific energy issue mapping",
              "Asset type distribution analytics",
            ],
          },
          {
            category: "System Management Completion",
            items: [
              "Complete Actions Taken module",
              "Work Orders consolidation and listing",
              "User Action Required workflow",
              "Management reporting dashboard",
            ],
          },
        ],
      },
    },
    // Week 8
    {
      type: "weekly",
      content: {
        week: "Week 8",
        date: "15-Aug-2025",
        title: "Nectar Intelligence Integration",
        deliverables: [
          {
            category: "AI-Powered Analysis",
            items: [
              "Energy Issues Analysis with Nectar Intelligence",
              "Predictive analytics implementation",
              "Machine learning model integration",
              "Intelligent recommendations engine",
              "Advanced pattern recognition",
              "Automated insights generation",
            ],
          },
        ],
      },
    },
    // Week 9
    {
      type: "weekly",
      content: {
        week: "Week 9",
        date: "22-Aug-2025",
        title: "Project Completion & Handover",
        deliverables: [
          {
            category: "Feature Handover",
            items: [
              "Complete system testing and validation",
              "User training and documentation",
              "Knowledge transfer sessions",
              "Production deployment",
              "Support documentation delivery",
              "Project closure and sign-off",
            ],
          },
        ],
      },
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const renderSlide = (slide: any) => {
    switch (slide.type) {
      case "title":
        return (
          <div className="h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-green-600"
              style={{
                backgroundImage: `url('/placeholder.svg?height=800&width=1200')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
              }}
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 text-white max-w-4xl mx-auto px-8">
              <div className="mb-8">
                <Zap className="w-20 h-20 mx-auto mb-6 text-green-200" />
              </div>
              <h1 className="text-6xl font-bold mb-6 leading-tight">{slide.content.title}</h1>
              <h2 className="text-3xl font-light mb-8 text-green-100">{slide.content.subtitle}</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xl">
                <Badge variant="secondary" className="px-6 py-3 text-lg bg-white/20 text-white border-white/30">
                  <Calendar className="w-5 h-5 mr-2" />
                  {slide.content.period}
                </Badge>
                <Badge variant="secondary" className="px-6 py-3 text-lg bg-white/20 text-white border-white/30">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  {slide.content.duration}
                </Badge>
              </div>
            </div>
          </div>
        )

      case "overview":
        return (
          <div className="h-full p-8 bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-1/2 h-full opacity-10"
              style={{
                backgroundImage: `url('/placeholder.svg?height=600&width=600')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="relative z-10 max-w-6xl mx-auto">
              <h1 className="text-5xl font-bold text-green-800 mb-8 flex items-center">
                <BarChart3 className="w-12 h-12 mr-4 text-green-600" />
                {slide.content.title}
              </h1>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-green-200 shadow-lg">
                  <CardHeader className="bg-green-600 text-white">
                    <CardTitle className="flex items-center">
                      <Calendar className="w-6 h-6 mr-2" />
                      Project Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-green-700">Start Date:</span>
                        <span className="text-green-800">{slide.content.startDate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-green-700">End Date:</span>
                        <span className="text-green-800">{slide.content.endDate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-green-700">Duration:</span>
                        <span className="text-green-800">{slide.content.totalWeeks} Weeks</span>
                      </div>
                      <Progress value={0} className="mt-4" />
                      <p className="text-sm text-green-600">Ready to commence</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200 shadow-lg">
                  <CardHeader className="bg-green-600 text-white">
                    <CardTitle className="flex items-center">
                      <Settings className="w-6 h-6 mr-2" />
                      Key Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {slide.content.keyFeatures.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-green-800">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )

      case "weekly":
        return (
          <div className="h-full p-6 bg-gradient-to-br from-green-50 to-green-100 overflow-y-auto">
            <div className="max-w-6xl mx-auto">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-4xl font-bold text-green-800 flex items-center">
                    <Calendar className="w-10 h-10 mr-3 text-green-600" />
                    {slide.content.week}
                  </h1>
                  <Badge variant="outline" className="px-4 py-2 text-lg border-green-300 text-green-700">
                    {slide.content.date}
                  </Badge>
                </div>
                <h2 className="text-2xl font-semibold text-green-700 mb-6">{slide.content.title}</h2>
              </div>

              <div className="grid gap-6">
                {slide.content.deliverables.map((deliverable: any, index: number) => (
                  <Card key={index} className="border-green-200 shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                      <CardTitle className="flex items-center text-xl">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                          <span className="text-sm font-bold">{index + 1}</span>
                        </div>
                        {deliverable.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        {deliverable.items.map((item: string, itemIndex: number) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span className="text-green-800 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="w-full h-screen bg-white flex flex-col">
      {/* Slide Content */}
      <div className="flex-1 relative">{renderSlide(slides[currentSlide])}</div>

      {/* Navigation */}
      <div className="bg-green-800 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={prevSlide} className="text-white hover:bg-green-700">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>
          <Button variant="ghost" size="sm" onClick={nextSlide} className="text-white hover:bg-green-700">
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-green-600 hover:bg-green-500"
              }`}
            />
          ))}
        </div>

        <div className="text-sm">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>
    </div>
  )
}
