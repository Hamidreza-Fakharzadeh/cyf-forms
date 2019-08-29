import React, { Component, Fragment } from 'react'
import { industryList, hearAboutCYFList } from '../helper'
import PhoneNumber from './phoneNumber'
import DropDown from './dropDown'
import TextInput from './textInput'
import TextArea from './textArea'
import Table from './table'
import TableTb from './tableTb'

export default class VolunteerForm extends Component {
  render() {
    const {
      onChange,
      firstName,
      lastName,
      tel,
      cities,
      cityId,
      email,
      telOnChange,
      errors,
      user,
      interestedInVolunteer,
      interestedInCYF,
      industry,
      hearAboutCYF,
      onChangeCheckList,
      guidePeople,
      techSkill,
      onChangeTechSkill,
      otherSkill,
      onChangeOtherSkill
    } = this.props

    const GuidePeopleTh = (
      <tr>
        <th className="border-none w-50">A. Guide people</th>
        <th className="border-none">None</th>
        <th className="border-none">Some</th>
        <th className="border-none">Part of a job</th>
      </tr>
    )
    const GuidePeopleTb = (
      <TableTb onChange={onChangeCheckList} list={guidePeople} />
    )
    const TechSkillTh = (
      <tr>
        <th className="border-none w-50">B. Teach people coding or UX</th>
        <th className="border-none">None</th>
        <th className="border-none">Some</th>
        <th className="border-none">Part of a job</th>
      </tr>
    )
    const TechSkillTb = (
      <TableTb onChange={onChangeTechSkill} list={techSkill} />
    )
    const OtherSkillTh = (
      <tr>
        <th className="border-none w-50">B. Teach people coding or UX</th>
        <th className="border-none">None</th>
        <th className="border-none">Some</th>
        <th className="border-none">Part of a job</th>
      </tr>
    )
    const OtherSkillTb = (
      <TableTb onChange={onChangeOtherSkill} list={otherSkill} />
    )
    return (
      <Fragment>
        <div className="form-section-one">
          <TextInput
            onChange={onChange}
            value={firstName}
            isEmpty={errors.firstName}
            label="First Name"
            name="firstName"
            placeholder="Your first name..."
            type="text"
          />
          <TextInput
            onChange={onChange}
            value={lastName}
            isEmpty={errors.lastName}
            label="Last Name"
            name="lastName"
            placeholder="Your first name..."
            type="text"
          />
          <PhoneNumber onChange={telOnChange} tel={tel} isEmpty={errors.tel} />
          <TextInput
            onChange={onChange}
            value={email}
            isEmpty={errors.email}
            emailExist={user.userExist}
            label="Email"
            name="email"
            placeholder="example@example.example"
            type="email"
          />
        </div>
        <DropDown
          onChange={onChange}
          value={cityId}
          name="cityId"
          arrayList={cities}
          isEmpty={errors.cityId}
          label="What CYF city do you want to work with?"
        />
        <p className="contact-interested">
          If you're interested in bringing CYF to your city, email us at
          <a
            href="mailto: contact@codeyourfuture.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            contact@codeyourfuture.io
          </a>
        </p>
        <TextArea
          onChange={onChange}
          value={interestedInVolunteer}
          isEmpty={errors.interestedInVolunteer}
          label="Why are you interested in volunteering?"
          name="interestedInVolunteer"
          placeholder="Text..."
          type="text"
        />
        <TextArea
          onChange={onChange}
          value={interestedInCYF}
          isEmpty={errors.interestedInCYF}
          label="Why are you interested in Code Your Future?"
          name="interestedInCYF"
          placeholder="Text..."
          type="text"
        />
        <DropDown
          onChange={onChange}
          value={industry}
          name="industry"
          arrayList={industryList}
          isEmpty={errors.industry}
          label="What industry are you in?"
        />
        <DropDown
          onChange={onChange}
          value={hearAboutCYF}
          name="hearAboutCYF"
          arrayList={hearAboutCYFList}
          isEmpty={errors.hearAboutCYF}
          label="Where did you hear about Code Your Future?"
        />
        <p className="contact-interested">
          What would you like help Code Your Future with, and what is your level
          of experience?
        </p>
        <Table componentTb={GuidePeopleTb} componentTh={GuidePeopleTh} />
        <Table componentTb={TechSkillTb} componentTh={TechSkillTh} />
        <Table componentTb={OtherSkillTb} componentTh={OtherSkillTh} />
      </Fragment>
    )
  }
}
