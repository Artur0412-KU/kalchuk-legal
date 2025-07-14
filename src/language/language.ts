import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  resources: {
    ua: {
      translation: {
        header: {
          about: 'Про мене',
          services: 'Послуги',
          contact: 'Зв’язатися',
          reviews: 'Відгуки',
        },
        main: {
          title: 'Міжнародна юридична підтримка у сфері сурогатного материнства.',
          subtitle: 'Захист ваших прав та інтересів на кожному етапі.',
          button: 'Замовити'
        },
        about: {
          title: 'Альона Кальчук',
          paragraph: 'Юрист з понад 10-річним досвідом у сфері репродуктивного права. Спеціалізуюся на міжнародному сурогатному материнстві, допомагаючи клієнтам у юридичних питаннях, оформленні договорів та дотриманні їх прав. Також я є ліцензованим медіатором, допомагаючи сторонам досягати згоди в найскладніших питаннях. Вільно володію українською, російською, англійською, французькою та іспанською мовами.',
          advantage: {
            first: 'Професіоналізм та конфіденційність',
            second: 'Досвід роботи у країнах Європи, США, Канаді та Латинській Америці.',
            third: 'Комплексна юридична підтримка.'
          }
        },
        reviews: {
          title: 'Відгуки',
          1: {
            review: 'Альона надала нам надзвичайно професійну допомогу. Усі юридичні питання були вирішені бездоганно!',
            author: 'Олена та Андрій, Україна',
          },
          2: {
            review: 'В Альоні ми знайшли розуміючого та професійного спеціаліста. Дякуємо за вашу чудову роботу!',
            author: 'Марк і Жан, Франція (гей-пара)'
          },
          3: {
            review: 'Ми спочатку були напружені, але з Альоною все було чітко і добре організовано.',
            author: 'Софі і Пол, Франція'
          }
        },
        faq: {
          title: 'Питання та відповіді (FAQ)',
          first: {
            question: 'Які документи потрібні для укладення договору сурогатного материнства?',
            answer: 'Залежно від юрисдикції, але зазвичай це паспорт, свідоцтво про шлюб та медичні висновки.'
          },
          second: {
            question: 'Чи потрібно мені бути присутнім під час народження дитини?',
            answer: "У більшості країн це не є обов'язковим, але присутність батьків може спростити юридичні та адміністративні процедури."
          },
          third: {
            question: 'Що робити, якщо сурогатна мати вирішить залишити дитину собі?',
            answer: "Юридично це майже неможливо, якщо договір складено правильно та відповідає законодавству."
          },
          fourth: {
            question: 'Як вибирається сурогатна мати?',
            answer: "Відбір сурогатної матері здійснюється на основі медичних, психологічних та юридичних критеріїв."
          },
          fifth: {
            question: 'Чи можна змінити юрисдикцію після підписання договору?',
            answer: "Це залежить від обставин, але така зміна може спричинити додаткові юридичні складнощі."
          }
        },
        servies: {
          title: 'Послуги',
          button: 'Замовити',
          list: {
            first: 'Консультації щодо вибору юрисдикції',
            second: 'Юридичний аналіз та підготовка договорів.',
            third: 'Супровід у реєстрації дитини після народження.',
            fourth: 'Фінансове консультування у сфері сурогатного материнства.',
            fifth: "Посередництво та медіація у конфліктах, пов'язаних із репродуктивними правами.",
            sixth: 'Підтримка у переговорах між біологічними батьками та сурогатною матір’ю/ клінікою/ агентством.',
            seventh: 'Розробка індивідуальних юридичних рішень для нестандартних ситуацій.'
          }
        },
        call: {
          title: 'Потребуєте допомоги у вашій програмі?',
          paragraph: "Зв'яжіться зі мною зараз!",
          button: "Зв’язатися"
        },
        modal: {
          title: 'Зв’язатися зі мною',
          name: 'Ваше ім’я',
          email: 'Ваш email',
          message: 'Ваше повідомлення',
          button: 'Надіслати',
          success: 'Ваше повідомлення надіслано успішно!',
          error: 'Помилка при надсиланні повідомлення. Будь ласка, спробуйте ще раз.',
          cancel: 'Скасувати',
          send: 'Надіслати',
        },
        privacyTitle: 'Політика конфіденційності',
      },
    },
    en: {
      translation: {
        header: {
          about: 'About Me',
          services: 'Services',
          contact: 'Contact',
          reviews: 'Reviews',
        },
        main: {
          title: 'International legal support in the field of surrogacy.',
          subtitle: 'Protection of your rights and interests at every stage.',
          button: 'Order'
        },
        about: {
          title: 'Alyona Kalchuk',
          paragraph: 'Lawyer with over 10 years of experience in the field of reproductive law. I specialize in international surrogacy, assisting clients with legal issues, drafting contracts, and enforcing their rights. I am also a licensed mediator, helping parties reach agreement on the most complex issues. I am fluent in Ukrainian, Russian, English, French, and Spanish.',
          advantage: {
            first: 'Professionalism and confidentiality',
            second: 'Work experience in Europe, the USA, Canada and Latin America.',
            third: 'Comprehensive legal support.'
          }
        },
        servies: {
          title: 'Services',
          button: 'Order',
          list: {
            first: 'Consultations on choosing a jurisdiction.',
            second: 'Legal analysis and contract preparation.',
            third: 'Assistance with child registration after birth.',
            fourth: 'Financial consulting in the field of surrogacy.',
            fifth: "Mediation and conflict resolution related to reproductive rights.",
            sixth: 'Support in negotiations between biological parents and the surrogate mother/clinic/agency.',
            seventh: ' Development of customized legal solutions for non-standard situations.'
          }
        },
        reviews: {
          title: 'Reviews',
          1: {
            review: 'Alyona provided us with extremely professional assistance. All legal issues were resolved flawlessly!',
            author: 'Olena and Andriy, Ukraine',
          },
          2: {
            review: 'In Alena we found an understanding and professional specialist. Thank you for your great work!',
            author: 'Marc and Jean, France (gay couple)'
          },
          3: {
            review: 'We were tense at first, but with Alyona everything was clear and well organized.',
            author: 'Sophie and Paul, France'
          }
        },
        faq: {
          title: 'Questions and Answers (FAQ)',
          first: {
            question: "What documents are needed to conclude a surrogacy agreement?",
            answer: "It depends on the jurisdiction, but usually a passport, marriage certificate, and medical reports are required."
          },
          second: {
            question: "Do I need to be present at the birth of the child?",
            answer: "In most countries, it is not mandatory, but the parents' presence can simplify legal and administrative procedures."
          },
          third: {
            question: "What if the surrogate decides to keep the child?",
            answer: "Legally, this is almost impossible if the contract is properly drafted and complies with the law."
          },
          fourth: {
          question: "How is the surrogate mother selected?",
            answer: "The surrogate is selected based on medical, psychological, and legal criteria."
          },
          fifth: {
            question: "Can the jurisdiction be changed after signing the contract?",
            answer: "It depends on the circumstances, but such a change may cause additional legal complications."
          }
      },
      call: {
          title: 'Need help with your program?',
          paragraph: "Contact me now!",
          button: "Contact"
      },
      modal: {
        title: 'Contact Me',
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        button: 'Send',
        success: 'Your message has been sent successfully!',
        error: 'Error sending message. Please try again.',
        cancel: 'Cancel',
        send: 'Send',
      },
      privacyTitle: 'Privacy Policy',
      },
    },
    fr: {
      translation: {
        header: {
          about: 'Sur moi',
          services: 'Services',
          contact: 'Contact',
          reviews: 'Avis',
        },
        main: {
          title: 'Accompagnement juridique international dans le domaine de la maternité de substitution.',
          subtitle: 'Protection de vos droits et intérêts à chaque étape.',
          button: 'Commande'
        },
        about: {
          title: 'Alyona Kalchuk',
          paragraph: "Avocat avec plus de 10 ans d'expérience dans le domaine du droit de la reproduction. Je me spécialise dans la maternité de substitution internationale, aidant les clients avec des questions juridiques, rédigeant des contrats et respectant leurs droits. Je suis également médiateur agréé, aidant les parties à parvenir à un accord sur les questions les plus difficiles. Je parle couramment l'ukrainien, le russe, l'anglais, le français et l'espagnol.",
          advantage: {
            first: 'Professionnalisme et confidentialité',
            second: 'Expérience professionnelle en Europe, aux États-Unis, au Canada et en Amérique latine.',
            third: 'Un accompagnement juridique complet.'
          }
        },
        servies: {
          title: 'Services',
          button: 'Commande',
          list: {
            first: 'Consultations sur le choix de la juridiction.',
            second: 'Analyse juridique et préparation des contrats.',
            third: "Assistance à l'enregistrement de l'enfant après la naissance.",
            fourth: 'Conseil financier dans le domaine de la gestation pour autrui.',
            fifth: "Médiation et résolution des conflits liés aux droits reproductifs.",
            sixth: "Accompagnement dans les négociations entre les parents biologiques et la mère porteuse/la clinique/l'agence.",
            seventh: ' Élaboration de solutions juridiques sur mesure pour des situations non conventionnelles.'
          }
        },
        reviews: {
          title: 'Avis',
          1: {
            review: 'Alyona nous a fourni une assistance extrêmement professionnelle. Tous les problèmes juridiques ont été résolus sans problème!',
            author: 'Olena et Andriy, Ukraine'
          },
          2: {
            review: 'Nous avons trouvé en Alyona une experte compréhensive et professionnelle. Merci pour tout votre travail incroyable !',
            author: 'Marc et Jean, France (couple homosexuel)'
          },
          3: {
            review: 'Nous étions stressés au début, mais avec Alyona, tout était clair et bien organisé.',
            author: 'Sophie et Paul, France'
          }
        },
        faq: {
          title: 'Questions et réponses (FAQ)',
          first: {
            question: "Quels documents sont nécessaires pour conclure un contrat de gestation pour autrui ?",
            answer: "Cela dépend de la juridiction, mais généralement, un passeport, un certificat de mariage et des rapports médicaux sont requis."
          },
          second: {
            question: "Dois-je être présent lors de la naissance de l'enfant ?",
            answer: "Dans la plupart des pays, ce n'est pas obligatoire, mais la présence des parents peut faciliter les procédures juridiques et administratives."
          },
          third: {
            question: "Que se passe-t-il si la mère porteuse décide de garder l'enfant ?",
            answer: "Légalement, c'est presque impossible si le contrat est correctement rédigé et conforme à la loi."
          },
          fourth: {
            question: "Comment est sélectionnée la mère porteuse ?",
            answer: "La sélection de la mère porteuse se fait sur la base de critères médicaux, psychologiques et juridiques."
          },
          fifth: {
            question: "Peut-on changer de juridiction après la signature du contrat ?",
            answer: "Cela dépend des circonstances, mais un tel changement peut entraîner des complications juridiques supplémentaires."
          }
        },
        call: {
          title: "Besoin d'aide avec votre programme?",
          paragraph: "Contactez-moi maintenant!",
          button: "Contact"
        },
        modal: {
          title: 'Contactez-moi',
          name: 'Votre nom',
          email: 'Votre e-mail',
          message: 'Votre message',
          button: 'Envoyer',
          success: 'Votre message a été envoyé avec succès !',
          error: 'Erreur lors de l’envoi du message. Veuillez réessayer.',
          cancel: 'Annuler',
          send: 'Envoyer',
        },
        privacyTitle: 'Politique de confidentialité',
      },

    },
  },
  lng: 'ua', // Set the default language
  fallbackLng: 'ua', // Set a fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18next;