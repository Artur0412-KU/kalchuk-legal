import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Modal() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('') 
    const [message, setMessage] = useState<string>('')
    const {t} = useTranslation()

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setName(e.target.value)
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setEmail(e.target.value)
    }

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
       setMessage(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();

      if (!name.trim() || !email.trim() || message.trim().length < 2) {
        alert(t('modal.error'));
        return;
      }

      const mailtoLink = `mailto:support@rep-legal.com?&body=${t('modal.name')}: ${encodeURIComponent(name)}%0A${t('modal.email')}: ${encodeURIComponent(email)}%0A${t('modal.message')}: ${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
      setName('');
      setEmail('');
      setMessage('');
      (document.getElementById('my_modal_5') as HTMLDialogElement)?.close();
    };
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
  <div className="modal-box bg-[url(/src/assets/main/main.png)]">
    <h3 className="font-bold text-lg mb-4">{t('modal.title')}</h3>

    <form
      method="dialog"
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
      noValidate
    >
    <input
      type="text"
    name="name"
    placeholder={t('modal.name')}
    className="input w-full bg-[#013B29] border border-white text-white placeholder:text-white"
    value={name}
    onChange={handleNameChange}
    pattern="^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s'-]{3,30}$"
    title="Ім’я має містити від 3 до 30 літер (можна пробіли, апострофи, дефіси)"
    required
    />
  <input
    type="email"
    name="email"
    placeholder={t('modal.email')}
    className="input w-full bg-[#013B29] border border-white text-white placeholder:text-white"
    value={email}
    onChange={handleEmailChange}
    required
  />
  <textarea
    name="message"
    placeholder={t('modal.message')}
    className="textarea w-full bg-[#013B29] border border-white text-white placeholder:text-white"
    rows={4}
    value={message}
    onChange={handleMessageChange}
    minLength={10}
    maxLength={1000}
    required
  ></textarea>

  <div className="modal-action flex justify-between">
    <button
      type="button"
      className="btn btn-outline hover:text-[#007932]"
      formMethod="dialog"
      onClick={(e) => {
        e.preventDefault();
        (document.getElementById('my_modal_5') as HTMLDialogElement)?.close();
      }}
    >
      {t('modal.cancel')}
    </button>
    <button
      type="submit"
      className="btn btn-primary bg-[#007932] border-[#007932] hover:bg-[#D1E9D3] hover:text-[#007932]"
    >
      {t('modal.send')}
    </button>
  </div>
</form>
  </div>
</dialog>
  )
}
