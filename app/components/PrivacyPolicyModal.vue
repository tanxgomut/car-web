<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue', 'confirm'])

const isPolicyChecked = ref(false)

const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
})

watch(() => props.modelValue, (val: boolean) => {
  if (val) isPolicyChecked.value = false
})

const handleConfirm = () => {
  if (isPolicyChecked.value) {
    emit('confirm')
    isOpen.value = false
  }
}
</script>

<template>
  <UModal v-model:open="isOpen" :dismissible="false" title="นโยบายความเป็นส่วนตัว"
    description="กรุณาอ่านและยอมรับเงื่อนไขเพื่อดำเนินการต่อ" :ui="{ content: 'md:max-w-3xl' }">

    <template #body>
      <div class="h-64 overflow-y-auto text-sm text-gray-600 dark:text-gray-300 space-y-4 pr-2">
        <div class="space-y-4">
          <section>
            <h4 class="font-bold text-gray-900 dark:text-white mb-1">1. การเก็บรวบรวมข้อมูล</h4>
            <p>
              ทางร้านจำเป็นต้องเก็บรวบรวมข้อมูลส่วนบุคคล (เช่น ชื่อ, เบอร์โทรศัพท์) และ <strong>ข้อมูลยานยนต์</strong>
              (เช่น ทะเบียนรถ, เลขไมล์, รุ่นรถ) เพื่อใช้ในการบันทึกประวัติการซ่อมบำรุงและการรับประกันอะไหล่
            </p>
          </section>

          <section>
            <h4 class="font-bold text-gray-900 dark:text-white mb-1">2. วัตถุประสงค์การใช้งาน</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>เพื่อแจ้งเตือนสถานะการซ่อม/แต่งรถ และนัดหมายรับรถ</li>
              <li>เพื่อเก็บรักษาประวัติการบำรุงรักษา (Service History) ให้ท่านสามารถตรวจสอบย้อนหลังได้</li>
              <li>เพื่อนำเสนอโปรโมชั่นหรืออะไหล่แต่งที่ตรงกับรุ่นรถของท่าน</li>
            </ul>
          </section>

          <section>
            <h4 class="font-bold text-gray-900 dark:text-white mb-1">3. การดูแลรักษาความปลอดภัย</h4>
            <p>
              ข้อมูลของท่านจะถูกจัดเก็บในระบบที่มีความปลอดภัยสูง
              เราจะไม่เปิดเผยข้อมูลทะเบียนรถหรือประวัติส่วนตัวแก่บุคคลภายนอก
              ยกเว้นกรณีที่จำเป็นต่อการสั่งซื้ออะไหล่เฉพาะทาง หรือการจดทะเบียนกับกรมขนส่งฯ เท่านั้น
            </p>
          </section>

          <section>
            <h4 class="font-bold text-gray-900 dark:text-white mb-1">4. สิทธิของลูกค้า</h4>
            <p>
              ท่านสามารถขอยกเลิกการรับข่าวสารประชาสัมพันธ์ หรือขอให้ลบข้อมูลส่วนบุคคลออกจากระบบได้ตลอดเวลา
              (ยกเว้นข้อมูลประวัติการซ่อมที่จำเป็นต้องเก็บไว้เพื่อการรับประกันงาน)
            </p>
          </section>

          <p class="text-xs text-gray-400 mt-6 border-t pt-2 border-gray-200 dark:border-gray-700">
            *การกด "ยืนยัน" ถือว่าท่านตกลงให้เราดูแลข้อมูลเพื่อประโยชน์สูงสุดในการบริการ
          </p>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
        <UCheckbox v-model="isPolicyChecked" name="policy" label="ฉันยอมรับเงื่อนไขและนโยบายการให้บริการ" />
        <div class="flex gap-2 justify-end w-full sm:w-auto">
          <UButton color="neutral" variant="ghost" label="ยกเลิก" @click="isOpen = false" />

          <UButton color="primary" variant="solid" label="ยืนยันและดำเนินการต่อ" :disabled="!isPolicyChecked"
            @click="handleConfirm" />
        </div>
      </div>
    </template>

  </UModal>
</template>