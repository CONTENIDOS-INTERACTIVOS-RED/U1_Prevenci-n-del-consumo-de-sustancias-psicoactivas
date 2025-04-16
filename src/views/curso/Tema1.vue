<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Generalidades de las sustancias psicoactivas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 La comprensión de las sustancias psicoactivas es fundamental para abordar los desafíos que plantea su uso en la sociedad contemporánea.
    .row.bg-azul.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto Generalidades de las sustancias psicoactivas
          p.mb-5(data-aos="fade-up") En el PDF Generalidades de las sustancias psicoactivas , se estudian sus efectos sobre el sistema nervioso, su uso histórico, ritual y terapéutico, así como los riesgos asociados al consumo recreativo y problemático. Este enfoque integral permite analizar desde múltiples dimensiones —biológica, social y cultural— el impacto de estas sustancias en la salud individual y colectiva.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Generalidades de las sustancias psicoactivas.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Generalidades de las sustancias psicoactivas
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')

    p.mb-4 Conozcamos algunos aspectos importantes dentro de estas generalidades:
    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        LineaTiempoD.large
          p(numero='1' titulo='Sustancias psicoactivas y su clasificación') La clasificación de las sustancias psicoactivas es un tema de gran relevancia en el campo de la salud pública, la medicina y la sociología, debido a sus implicaciones en la salud mental, física y social de los individuos que las consumen. Las sustancias psicoactivas son aquellas que, al ingresar al organismo, alteran el estado mental, emocional o comportamental de una persona, lo que puede resultar en efectos tanto positivos como negativos, dependiendo del contexto de consumo, la sustancia en sí misma y la cantidad ingerida. A lo largo de este texto, abordaremos en profundidad la clasificación de las sustancias psicoactivas, desglosadas en diferentes categorías, según sus características, efectos, origen, y legalidad, entre otros aspectos relevantes.
          p(numero='2' titulo='Relevancia de la clasificación de las sustancias psicoactivas') Las sustancias psicoactivas son compuestos que, al ingresar al cuerpo humano, modifican el funcionamiento normal del cerebro y del sistema nervioso central, lo que genera alteraciones en la percepción, el pensamiento, las emociones y el comportamiento. Estas sustancias han sido utilizadas a lo largo de la historia con fines diversos, como la medicina, la recreación, los rituales religiosos o espirituales y, en ocasiones, de manera ilegal o peligrosa.<br><br>La clasificación de estas sustancias es esencial para entender sus efectos, los riesgos asociados con su consumo, y las políticas públicas necesarias para regular su uso. Esta clasificación no solo facilita la investigación científica sobre los efectos de cada tipo de sustancia, sino que también proporciona herramientas para el tratamiento y prevención de problemas relacionados con el abuso y la dependencia. Las sustancias psicoactivas pueden clasificarse de diversas maneras, pero las categorías más comunes incluyen la clasificación, según su acción en el sistema nervioso central, su origen, su legalidad, y sus posibles riesgos para la salud.
          p(numero='3' titulo='Clasificación, según su acción sobre el sistema nervioso central') Una de las maneras más comunes de clasificar las sustancias psicoactivas es, según su efecto sobre el sistema nervioso central (SNC); es decir, si actúan como depresores, estimulantes o alucinógenos. Esta clasificación es importante porque cada tipo de sustancia tiene efectos específicos sobre el organismo, que pueden ser tanto terapéuticos como dañinos.

    h2 Clasificación, según su acción sobre el sistema nervioso central
    .bg-rojo.px-4.row.bg-full-width.mb-4
      .col-12.col-xl-9.d-flex
        p.my-auto(data-aos="fade-up") Una de las maneras más comunes de clasificar las sustancias psicoactivas es, según su efecto sobre el sistema nervioso central (SNC); es decir, si actúan como depresores, estimulantes o alucinógenos. Esta clasificación es importante porque cada tipo de sustancia tiene efectos específicos sobre el organismo, que pueden ser tanto terapéuticos como dañinos.
      .col-3.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Depresores del sistema nervioso central

    p.mb-4 Los depresores son sustancias que disminuyen la actividad del sistema nervioso central, lo que generalmente se traduce en efectos como la relajación, la sedación, la disminución de la coordinación motora, y la reducción de la ansiedad. Estos efectos se deben a que los depresores actúan sobre neurotransmisores específicos, como el GABA (ácido gamma-aminobutírico), que tienen la función de inhibir la actividad neuronal.
    p.mb-4 Entre los depresores más conocidos se encuentran:
    ImagenInfografica.color-secundario.mb-0.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-10.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='20%' y='20%' numero='+')
        .h5.mb-2 El alcohol
        p El alcohol es uno de los depresores más consumidos a nivel mundial. Aunque en dosis moderadas puede producir una sensación de relajación y desinhibición, el abuso de esta sustancia puede tener efectos devastadores sobre el organismo, como enfermedades hepáticas, trastornos cardiovasculares, y trastornos psiquiátricos, como la depresión y la ansiedad.
      .tarjeta.bg-white.p-4(x='20%' y='20%' numero='+')
        .h5.mb-2 Benzodiazepinas
        p Las benzodiazepinas, como el diazepam (Valium) o el alprazolam (Xanax), son medicamentos utilizados en el tratamiento de la ansiedad, insomnio y otros trastornos. Sin embargo, su uso prolongado o no controlado, puede llevar a la dependencia, el abuso y, en casos extremos, a la sobredosis.
      .tarjeta.bg-white.p-4(x='20%' y='20%' numero='+')
        .h5.mb-2 Barbitúricos
        p Aunque actualmente están menos utilizados debido a su alto potencial de abuso, los barbitúricos fueron, en el pasado, ampliamente prescritos para tratar la ansiedad y los trastornos del sueño. Estos fármacos tienen un alto riesgo de sobredosis, especialmente cuando se combinan con otras sustancias depresoras, como el alcohol.
      .tarjeta.bg-white.p-4(x='20%' y='20%' numero='+')
        .h5.mb-2 Opioides
        p Los opioides, como la morfina, la heroína y la codeína, son conocidos por sus efectos analgésicos y sedantes. Aunque estos compuestos pueden ser muy efectivos en el tratamiento del dolor, su uso indebido puede generar dependencia y adicción, siendo responsables de una gran cantidad de muertes por sobredosis, en todo el mundo.
    
    .d-flex.align-items-start.bg-full-width.bg-gris.text-white.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-11.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 Los depresores, a pesar de sus usos médicos legítimos, tienen un alto potencial de abuso y adicción. El consumo excesivo de estas sustancias puede generar una dependencia física y psicológica, lo que lleva a la persona a consumirlas de manera compulsiva y a experimentar graves consecuencias en su salud física y mental. 

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Estimulantes del sistema nervioso central

    p.mb-4 Los estimulantes, a diferencia de los depresores, aumentan la actividad del sistema nervioso central, lo que genera efectos como la euforia, el aumento de energía, la mejora en la concentración y la reducción de la fatiga. Estos efectos suelen ser deseables para quienes buscan un impulso temporal en su rendimiento físico o mental.
    p.mb-4 Los principales estimulantes incluyen:

    .row.position-relative.mb-0.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-8.col-xl-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Cafeína
              p La cafeína es el estimulante más consumido en el mundo. Se encuentra en el café, el té, y muchas bebidas energéticas. En dosis moderadas, la cafeína puede aumentar el estado de alerta y la concentración, pero el consumo excesivo puede provocar ansiedad, insomnio, y aumento de la presión arterial.
            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-8.col-xl-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Nicotina
              p La nicotina es una de las sustancias psicoactivas más adictivas. Se encuentra en los productos de tabaco y produce efectos estimulantes sobre el sistema nervioso, lo que genera una sensación de bienestar temporal. Sin embargo, su consumo regular está estrechamente relacionado con enfermedades respiratorias, cardiovasculares y diversos tipos de cáncer.
            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-8.col-xl-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Anfetamina
              p Las anfetaminas, como la metanfetamina o el Adderall, son sustancias que incrementan la liberación de dopamina en el cerebro, lo que produce efectos de euforia, aumento de la energía, y mejora del rendimiento cognitivo. Sin embargo, estas sustancias tienen un alto potencial de abuso y pueden llevar a la adicción, la psicosis, y trastornos cardiovasculares graves.
            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-8.col-xl-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Cocaína
              p La cocaína es un potente estimulante que actúa bloqueando la recaptación de dopamina en el cerebro, lo que produce una intensa sensación de euforia y energía. A pesar de su corta duración de acción, la cocaína es extremadamente adictiva, y su abuso está asociado con graves problemas de salud, como daño cerebral, problemas cardiovasculares, y trastornos psicológicos como la paranoia y la depresión.
            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

    .d-flex.align-items-start.bg-morado.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-16.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 Los estimulantes, aunque proporcionan un impulso temporal en el estado de ánimo y la energía, pueden ser peligrosos cuando se consumen en grandes cantidades o de manera habitual. La dependencia de estos compuestos puede ser psicológica y física, lo que puede llevar a la persona a consumir cada vez más, para mantener los efectos deseados, lo que a su vez aumenta el riesgo de efectos secundarios negativos.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.3
        h2 Alucinógenos

    p.mb-4 Los alucinógenos son sustancias que alteran la percepción de la realidad, provocando alucinaciones y cambios en el pensamiento, la sensación, y la conciencia. Estos efectos pueden ser visuales, auditivos o sensoriales, y las personas que consumen alucinógenos pueden experimentar una distorsión en su sentido del tiempo, espacio, y realidad.
    p.mb-4 Algunos de los alucinógenos más conocidos incluyen:
    TabsC.mb-0
      .tabs-content.border.px-4.p-md-5.py-3(titulo='', :icon="require('@/assets/curso/unidad/img-17.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-18.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4(data-aos='fade-up') LSD (ácido lisérgico)
            p(data-aos='fade-up') El LSD es uno de los alucinógenos más potentes. Los usuarios que consumen LSD pueden experimentar una alteración profunda de la percepción sensorial, lo que puede llevar a una "experiencia mística" o "viaje". Sin embargo, el LSD también puede provocar efectos adversos, como paranoia, ansiedad y alucinaciones aterradoras.
      .tabs-content.border.px-4.p-md-5.py-3(titulo='', :icon="require('@/assets/curso/unidad/img-17.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-19.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4(data-aos='fade-up') Psilocibina
            p(data-aos='fade-up')  La psilocibina es el compuesto activo presente en los hongos alucinógenos. Al igual que el LSD, la psilocibina induce alteraciones en la percepción y el pensamiento, aunque muchos usuarios reportan una sensación de conexión espiritual o trascendental. No obstante, el consumo de psilocibina puede ser peligroso en personas con antecedentes de trastornos psicológicos.
      .tabs-content.border.px-4.p-md-5.py-3(titulo='', :icon="require('@/assets/curso/unidad/img-17.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-20.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4(data-aos='fade-up') Mescalina
            p(data-aos='fade-up') La mescalina es un alucinógeno presente en ciertos cactus, como el peyote. Sus efectos son similares a los del LSD y la psilocibina, provocando alteraciones en la percepción y un sentimiento de expansión de la conciencia. Aunque históricamente ha sido utilizada en rituales religiosos, su consumo recreativo puede ser riesgoso, especialmente para personas sin experiencia.
      .tabs-content.border.px-4.p-md-5.py-3(titulo='', :icon="require('@/assets/curso/unidad/img-17.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-21.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4(data-aos='fade-up') DMT (dimetiltriptamina)
            p(data-aos='fade-up') El DMT es un alucinógeno extremadamente potente que se encuentra en diversas plantas y que puede inducir visiones y experiencias trascendentales en cuestión de minutos. Aunque se ha utilizado en prácticas chamánicas, el DMT también puede provocar efectos adversos, como ansiedad, paranoia y confusión.

    .d-flex.align-items-start.bg-amarillo.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-22.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 Los alucinógenos, aunque en algunos casos se utilizan con fines terapéuticos o espirituales, pueden ser peligrosos si se consumen sin el debido conocimiento y control. Las experiencias inducidas por estos compuestos pueden ser profundamente perturbadoras y, en algunos casos, pueden desencadenar trastornos psicológicos a largo plazo. 

    #t_1_4.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.4
        h2 Clasificación, según su origen

    .row.mb-4
      .col-12.col-xl-9
        p.mb-4(data-aos="fade-up") Las sustancias psicoactivas también pueden clasificarse, según su origen, ya sea natural o sintético. Esta distinción es importante porque afecta a la forma en que se producen, se distribuyen y se perciben socialmente.
        h2 Sustancias naturales
        span Las sustancias psicoactivas de origen natural, se obtienen de plantas, hongos o animales. Estas sustancias han sido utilizadas durante siglos en diversas culturas, con fines medicinales, rituales o recreativos. Entre las sustancias naturales más conocidas se encuentran:
      .col-3.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
    
    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-8.col-xl-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Marihuana
              p La marihuana es una de las sustancias psicoactivas naturales más consumidas en el mundo. Se obtiene de la planta Cannabis sativa y contiene compuestos como el tetrahidrocannabinol (THC), que produce efectos psicoactivos. A pesar de su estatus legal en algunos países, la marihuana sigue siendo objeto de controversia, debido a sus riesgos para la salud y su potencial de abuso.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-8.col-xl-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Cocaína
              p La cocaína se obtiene de las hojas de la planta Erythroxylum coca. Es un potente estimulante que ha sido utilizado históricamente en la medicina, para tratar dolores y trastornos, aunque su uso recreativo ha provocado graves problemas de salud pública, debido a su alto potencial de abuso.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-8.col-xl-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Hongos alucinógenos
              p Los hongos que contienen psilocibina se han utilizado en rituales chamánicos y espirituales desde tiempos antiguos. Estos hongos son conocidos por sus efectos alucinógenos, que pueden alterar la percepción de la realidad.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-8.col-xl-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Peyote
              p El peyote es un cactus que contiene mescalina, un potente alucinógeno utilizado en rituales religiosos y ceremoniales, por diversas culturas indígenas de América.

    h2 Sustancias sintéticas
    p.mb-4 Las sustancias sintéticas, por otro lado, son aquellas que se producen en laboratorios, mediante procesos químicos. Estas sustancias pueden ser diseñadas para imitar los efectos de las sustancias naturales, o bien para crear compuestos completamente nuevos con propiedades psicoactivas. Algunas de las sustancias sintéticas más conocidas, incluyen:
    .row.mb-4
      .col-12.col-xl-8
        .d-flex.align-items-start.bg-azul-oscuro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-28.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold MDMA (éxtasis)
            span El MDMA es una droga sintética conocida por sus efectos estimulantes y empatógenos. Es comúnmente utilizada en fiestas y conciertos, pero su abuso puede provocar deshidratación, hipertensión y daños cerebrales, a largo plazo.
        .d-flex.align-items-start.bg-azul-oscuro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-29.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Metanfetamina
            span La metanfetamina es un potente estimulante sintético que puede producir una sensación de euforia intensa, pero su uso prolongado es muy dañino, causando problemas cardiovasculares, daño cerebral y trastornos psicológicos.
        .d-flex.align-items-start.bg-azul-oscuro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-30.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Fentanilo
            span El fentanilo es un opioide sintético, extremadamente potente, que se utiliza en medicina como analgésico. Sin embargo, su abuso ha provocado una crisis de sobredosis en varios países, debido a su alta toxicidad.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

    #t_1_5.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.5
        h2 Clasificación, según su legalidad

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .bg-rojo.p-4.mb-4(data-aos="fade-up")
          span Otro criterio importante de clasificación, es la legalidad de las sustancias psicoactivas. Algunas sustancias están permitidas para el uso médico o recreativo bajo ciertas regulaciones, mientras que otras están prohibidas, debido a los riesgos que implican para la salud y la seguridad pública. Esta distinción es fundamental tanto para la regulación gubernamental como para la prevención de su abuso.
        h2 Sustancias legales
        p.mb-4(data-aos="fade-up") Algunas sustancias psicoactivas son legales y están reguladas por las autoridades para su consumo en ciertos contextos. Entre las más comunes se encuentran:

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Alcohol', :icon="require('@/assets/curso/unidad/img-33.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-36.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4(data-aos='fade-up') Alcohol
            p(data-aos='fade-up') El alcohol es legal en la mayoría de los países y es consumido tanto con fines recreativos como sociales. A pesar de ser legal, el alcohol presenta riesgos significativos para la salud cuando se consume en exceso.
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Tabaco', :icon="require('@/assets/curso/unidad/img-34.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-37.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4(data-aos='fade-up') Tabaco
            p(data-aos='fade-up') El tabaco también es legal en muchos países, aunque está sometido a regulaciones estrictas debido a sus efectos nocivos para la salud, especialmente el cáncer y las enfermedades respiratorias.
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Medicamentos recetados', :icon="require('@/assets/curso/unidad/img-35.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-38.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4(data-aos='fade-up') Medicamentos recetados
            p(data-aos='fade-up') Muchas sustancias psicoactivas, como las benzodiazepinas, los opiáceos y los antidepresivos, son legales cuando son prescritas por un médico para tratar condiciones médicas específicas. Sin embargo, su uso indebido o el abuso de estos medicamentos, puede tener consecuencias graves.

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        h2 Sustancias ilegales
        p.mb-4 Las sustancias ilegales son aquellas que están prohibidas por la Ley, debido a su alto potencial de abuso y sus efectos dañinos para la salud. Algunas de las sustancias ilegales más conocidas, incluyen:

        .row.mb-4.justify-content-center
          .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-39.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Cocaína
              p.px-1.text-small.mb-0.d-flex.text-center A pesar de su origen natural, la cocaína es ilegal en la mayoría de los países, debido a su alto potencial de abuso y los riesgos asociados con su consumo.
          .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-40.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Heroína
              p.px-1.text-small.mb-0.d-flex.text-center La heroína es un opioide ilegal que se deriva de la morfina. Su uso recreativo es extremadamente peligroso y está asociado con una alta tasa de adicción y muerte por sobredosis.
          .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-41.svg', style='width: 80px')
              p.text-bold.mb-4.text-center LSD
              p.px-1.text-small.mb-0.d-flex.text-center El LSD es una droga alucinógena sintética que, aunque no presenta un alto riesgo de dependencia física, está prohibida en muchos países, debido a sus efectos impredecibles y potencialmente peligrosos.

    .bg-amarillo.px-4.row.bg-full-width.mb-5
      .col-12.col-xl-8.d-flex
        p.my-auto La clasificación de las sustancias psicoactivas, es un tema complejo y multifacético que implica consideraciones biológicas, psicológicas, sociales y legales. Al clasificar las sustancias psicoactivas, según su acción sobre el sistema nervioso central, su origen, su legalidad y otros criterios, podemos comprender mejor sus efectos y riesgos, lo que facilita la creación de políticas públicas y estrategias de prevención efectivas. Además, esta clasificación permite informar al público sobre los riesgos asociados con el consumo de estas sustancias y promover un enfoque más responsable y seguro en su uso.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')     
    
    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/Abece-salud-mental-psicoactivas-octubre-2016-minsalud.pdf") Ministerio de Salud y Protección Social. ABECÉ de la prevención y atención al consumo de sustancias psicoactivas. 2016
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=vMDqQZ3z8Q4") [Vídeo] CORPORACION EDUCATIVA INDOAMERICANA. Charla de Prevención de Consumo de sustancias Psicoactivas.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
